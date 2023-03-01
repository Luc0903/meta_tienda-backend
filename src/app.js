import express from "express";
import userRouter from "./user/userRoutes.js";
import productRouter from "./products/productsRoutes.js";
import imagesRouter from "./images/imagesRoutes.js";
// import globalErrorHandler from './errors/errorHandlingMiddlewr.js'
import AuthMiddleware from "./middleware/authMiddlware.js";
import fileUpload from "express-fileupload";
import cors from "cors";

const app = express();

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  })
);
app.use(cors());
app.use(express.json());
app.use("/api/v1/user", userRouter);
// app.use("/api/products", AuthMiddleware, productRouter);
app.use("/api/products", productRouter);
app.use("/api/images", imagesRouter);

app.get("/", (req, res) => {
  res.send("working fine ");
});

// app.use(globalErrorHandler)

export default app;
