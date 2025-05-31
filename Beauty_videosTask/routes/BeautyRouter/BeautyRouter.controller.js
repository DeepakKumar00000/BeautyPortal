const {
  beautyService,
  getAllBeautyItems,
  getBeautyItemById,
  fetchVideoById,
  incrementLike,
} = require("./BeautyRouter.services");

module.exports = {
  beautyController: (req, res) => {
    try {
      const { name } = req.body;
      const videourl = req.files?.videourl?.[0];
      const thumbnailurl = req.files?.thumbnailurl?.[0];

      if (!videourl || !thumbnailurl) {
        return res
          .status(400)
          .json({ message: "Video and thumbnail are required." });
      }

      const videoUrl = `/uploads/videos/${videourl.filename}`;
      const thumbnailUrl = `/uploads/images/${thumbnailurl.filename}`;

      const payload = { name, videoUrl, thumbnailUrl };

      beautyService(payload, (err, result) => {
        if (err) {
          console.error("DB Error:", err);
          return res.status(500).json({ error: "Database error" });
        }
        return res.status(200).json({
          message: "Upload successful",
          data: result,
        });
      });
    } catch (error) {
      console.error("Upload Error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  fetchAllBeautyItems: (req, res) => {
    getAllBeautyItems((err, results) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch data" });
      }
      return res.status(200).json({
        message: "Data fetched successfully",
        result: results,
      });
    });
  },

  fetchVideoById: (req, res) => {
    const id = req.params.id;

    getBeautyItemById(id, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch video" });
      }

      if (!result) {
        return res.status(404).json({ message: "Video not found" });
      }

      return res.status(200).json({
        message: "Video fetched successfully",
        result: result,
      });
    });
  },

  likeVideo: (req, res) => {
    const { videourl, name } = req.body;

    if (!videourl || !name) {
      return res.status(400).json({ error: "videourl and name are required" });
    }

    incrementLike({ videourl, name }, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Failed to update likes" });
      }
      return res.status(200).json({ likecounts: result.likecounts });
    });
  },
};
