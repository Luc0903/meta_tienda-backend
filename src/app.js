import express from "express";
import userRouter from "./user/userRoutes.js";
import productRouter from "./products/productsRoutes.js";
// import globalErrorHandler from './errors/errorHandlingMiddlewr.js'
import AuthMiddleware from "./middleware/authMiddlware.js";
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/user", userRouter);
app.use("/api/products", AuthMiddleware, productRouter);

app.get("/", (req, res) => {
  res.send("working fine ");
});

// app.use(globalErrorHandler)

export default app;
