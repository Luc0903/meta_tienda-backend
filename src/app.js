import express from "express";
import userRouter from "./user/userRoutes.js";
import productRouter from "./products/productsRoutes.js";
// import globalErrorHandler from './errors/errorHandlingMiddlewr.js'
import AuthMiddleware from "./middleware/authMiddlware.js";
import fileUpload from "express-fileupload";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  })
);
app.use(express.json());
app.use(fileUpload());
app.use("/api/v1/user", userRouter);
// app.use("/api/products", AuthMiddleware, productRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("working fine ");
});

// app.use(globalErrorHandler)

export default app;
