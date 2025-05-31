
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [likes, setLikes] = useState({});


  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/all")
      .then((res) => {
        setVideos(res.data.result);

        const initialLikes = {};
        res.data.result.forEach((video) => {
          initialLikes[video.videourl] = 0;
        });
        setLikes(initialLikes);
      })
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  const handleLike = (e, videourl, name) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/likes", { videourl, name })
      .then((res) => {
        setLikes((prevLikes) => ({
          ...prevLikes,
          [videourl]: res.data.likecounts,
        }));
      })
      .catch((err) => console.error("Error updating like:", err));
  };


  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div id="video-gallery" className="p-4 sm:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-[#D6597C]">
        Our Latest Videos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-10">
        {currentVideos.length > 0 ? (
          currentVideos.map((video) => (
            <Link
              to={`/video/${video.id}`}
              key={video.id}
              className="rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={`http://localhost:5000${video.thumbnailurl}`}
                alt={video.name}
                className="w-full h-64 sm:h-[370px] object-cover"
              />
              <div className="p-4 text-white backdrop-blur-md bg-[#D6597C] font-bold flex justify-between items-center">
                <h3 className="text-lg font-semibold flex-1">{video.name}</h3>
                <div className="flex items-center gap-3">
                  <button
                    aria-label="Like"
                    className="text-white hover:text-pink-300 transition-colors flex items-center gap-1"
                    onClick={(e) => handleLike(e, video.videourl, video.name)}
                  >
                    <Heart size={22} />
                    <span>{likes[video.videourl] || 0}</span>
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-black col-span-full text-center">
            No videos found.
          </p>
        )}
      </div>

 
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#D6597C] text-white rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-black font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#D6597C] text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
