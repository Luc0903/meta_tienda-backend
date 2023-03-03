import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadImgCloduinary = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, { folder: "metatienda" });
};

export default cloudinary;
