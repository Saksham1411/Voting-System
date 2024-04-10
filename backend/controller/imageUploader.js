const DatauriParser = require('datauri/parser');
const { StatusCodes } = require('http-status-codes');
const cloudinary = require('cloudinary').v2;
const path = require('path');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const parser = new DatauriParser();

const imageUploader = async (req, res) => {
    // console.log(req.file);
    const extName = path.extname(req.file.originalname).toString();
    const file = parser.format(extName, req.file.buffer);

    const result = await cloudinary.uploader.upload(file.content);
    res.status(StatusCodes.OK).send(result.url);
}

module.exports = { imageUploader };