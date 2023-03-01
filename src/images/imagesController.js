import { uploadImgCloduinary } from "../utils/cloudinary.js";

export async function handleImageData(req, res) {
  const { clotheImage } = req.files;
  console.log(clotheImage);
  try {
    const result = await uploadImgCloduinary(clotheImage.tempFilePath);
    return res.json({ result });
  } catch (error) {
    console.log("mensaje de error", error);
    return res.status(501).json({ errorMSG: "no idea" });
  }
}
