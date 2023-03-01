import { Router } from "express";
import { handleImageData } from "./imagesController.js";

const router = Router();

router.route("/").post(handleImageData);

export default router;
