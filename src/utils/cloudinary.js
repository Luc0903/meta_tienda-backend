import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config({ path: "../../config.env" });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

export const uploadImgCloduinary = async (filePath) => {
  return await cloudinary.v2.uploader.upload(filePath, {
    folder: "metatienda",
  });
};

export const deleteImgCloudinary = async (filePath) => {
  return await cloudinary.v2.uploader.destroy(filePath, {
    folder: "metatienda",
  });
};

export default cloudinary;
