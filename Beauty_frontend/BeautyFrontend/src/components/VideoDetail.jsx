import React from "react";
import { useParams , useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";

const VideoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [allVideos, setAllVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/all")
      .then((res) => {
        const all = res.data.result || [];
        setAllVideos(all);
        const found = all.find((vid) => String(vid.id) === id);
        setCurrentVideo(found);
      })
      .catch((err) => console.error("Error fetching videos:", err));
  }, [id]);

  const handleThumbnailClick = (video) => {
    setCurrentVideo(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!currentVideo) return <div className="text-center py-20 text-white">Loading...</div>;

  return (
    <>
    {/* <Navbar/> */}


    <div className="flex justify-between items-center px-4 mt-4">
    <img
    src="/vite2.png"
    alt="Logo"
    className="h-1 sm:h-12 w-auto"
    onClick={() => navigate("/")}
  />

      <button
        onClick={() => navigate("/")}
        className="bg-[#D6597C] text-white px-5 py-2 rounded-full hover:bg-pink-700 transition-all shadow-md"
      >
        Back
      </button>
    </div>

    <div className="px-4 py-8 mt-15">
      <h2 className="text-xl text-white font-bold mb-4 text-center">{currentVideo.name}</h2>
      <div className="w-full bg-black mb-8" style={{ height: "450px" }}>
        <ReactPlayer
          url={`http://localhost:5000${currentVideo.videourl}`}
          controls
          width="100%"
          height="100%"
        />
      </div>

      <h3 className="text-2xl font-bold text-white my-4 text-center">More Videos</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {allVideos.map((video) => (
          <div
            key={video.id}
            onClick={() => handleThumbnailClick(video)}
            className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`http://localhost:5000${video.thumbnailurl}`}
              alt={video.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-2 text-sm font-semibold text-center">{video.name}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default VideoDetail;
