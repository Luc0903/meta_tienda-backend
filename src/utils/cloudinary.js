import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// `${process.env.CLOUDINARY_URL}`
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  // cloud_name: "dctqxutsq",
  // api_key: 427528858229588,
  // api_secret: "83vwSDPIdkPoJMbAY4lGjJFHBZ4",
});

export const uploadImgCloduinary = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "metatienda",
  });
};

// export const deleteImgCloudinary = async (filePath) => {
//   return await cloudinary.v2.uploader.destroy(filePath, {
//     folder: "metatienda",
//   });
// };

export default cloudinary;
