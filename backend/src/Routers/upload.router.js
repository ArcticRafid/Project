import { Router } from "express";
import multer from "multer";
import handler from 'express-async-handler';
import { configCloudinary } from "../config/cloudinary.config.js";

const router = Router();
const upload = multer();

router.post('/', upload.single('image'),
handler(async(req, res) => {
    const file = req.file;
    if (!file) {
        return;
    }

    const imageUrl = await uploadImageToCloudinary(file?.buffer);
    res.send({image: imageUrl});
})
);

const uploadImageToCloudinary = imageBuffer => {
    const cloudinary = configCloudinary();
  
    return new Promise((resolve, reject) => {
      if (!imageBuffer) reject(null);
  
      cloudinary.uploader
        .upload_stream((error, result) => {
          if (error || !result) reject(error);
          else resolve(result.url);
        })
        .end(imageBuffer);
    });
  };
  
  export default router;