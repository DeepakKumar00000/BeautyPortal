
const express = require('express');
const router = express.Router();

const { beautyController,fetchAllBeautyItems,likeVideo,fetchVideoById } = require('./BeautyRouter.controller');
const upload = require('../../middleware/multer.config');


router.post( '/upload',upload.fields([
    { name: 'videourl', maxCount: 1 },
    { name: 'thumbnailurl', maxCount: 1 }
  ]),beautyController);
  
router.get('/all', fetchAllBeautyItems);
router.post('/likes', likeVideo);
router.get('/video/:id', fetchVideoById);
module.exports = router;
