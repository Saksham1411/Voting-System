const express = require('express');
const multer = require('multer');
const { imageUploader } = require('../controller/imageUploader');

const router = express.Router();

const storage = multer.memoryStorage();
const photosMiddleware = multer({ storage });

router.post('/uploadImage', photosMiddleware.single('logo'), imageUploader);

module.exports = router;