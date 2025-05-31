const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Utility function to ensure upload folders exist
const ensureFolderExists = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
};

// Define Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath;

    if (file.mimetype.startsWith('video')) {
      uploadPath = path.join(__dirname, '../public/uploads/videos');
    } else if (file.mimetype.startsWith('image')) {
      uploadPath = path.join(__dirname, '../public/uploads/images');
    } else {
      return cb(new Error('Only image and video files are allowed'), false);
    }

    // Create directory if not exists
    ensureFolderExists(uploadPath);

    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const cleanName = file.originalname.replace(/\s+/g, '-');
    const filename = `${timestamp}-${cleanName}`;
    cb(null, filename);
  }
});

// File filter to allow only videos and images
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith('video') ||
    file.mimetype.startsWith('image')
  ) {
    cb(null, true);
  } else {
    cb(new Error('Only video and image files are allowed'), false);
  }
};

// Multer middleware configuration
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 100 * 1024 * 1024 // 100 MB
  },
  fileFilter: fileFilter
});

module.exports = upload;
