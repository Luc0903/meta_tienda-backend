import Product from "./productsModel.js";
import { StatusCodes } from "http-status-codes";
import {
  uploadImgCloduinary,
  deleteImgCloudinary,
} from "../utils/cloudinary.js";

export async function getAllProducts(req, res) {
  try {
    const products = await Product.find({});
    if (!products || !products.length) return res.json({ response: "no data" });
    return res.status(StatusCodes.OK).json({ products });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getSingleProduct(req, res) {
  const { id: product_id } = req.params;
  if (!product_id) return res.send(" Hubo un problema con el id del producto ");

  const product = await Product.find({ _id: product_id });
  if (!product) return res.send(`No existing product with id ${product_id}`);

  return res.status(StatusCodes.OK).json({ product });
}

export async function createProduct(req, res) {
  // const {
  //   body: { name, description, price, stock, category },
  //   files: { image },
  // } = req;

  const { body, files } = req;
  console.log(files.productImage);
  console.log(body.clotheInfo.name);

  return res.status(200).json({ message: "ok" });

  // if (Object.values(body).includes("") || !files.image) {
  //   res.send("Todos los campos deben ser completados");
  // }

  // const result = await uploadImgCloduinary(image.tempFilePath);

  // const createdProduct = await Product.create({
  //   name,
  //   description,
  //   price,
  //   stock,
  //   category,
  //   image: {
  //     public_id: result.public_id,
  //     url: result.secure_url,
  //   },
  // });

  // res.status(StatusCodes.OK).json({ createdProduct });
}

export async function editProduct(req, res) {
  const {
    params: { id: product_id },
    body: { name, description, price, stock, category },
    // files: { image }
  } = req;

  if (!name || !description || !price || !stock || !image || !category) {
    res.send("Todos los campos deben ser completados");
  }

  const updatedProduct = await Product.findByIdAndUpdate(product_id, {
    name,
    description,
    price,
    stock,
    category,
    // image: {
    //     public_id: result.public_id,
    //     url: result.secure_url
    // }
  });

  res.status(StatusCodes.OK).json({ updatedProduct });
}

export async function deleteProduct(req, res) {
  const { id: product_id } = req.params;
  if (!product_id) return res.send(" No id provided ");

  const deletedProduct = await Product.findByIdAndRemove({ _id: product_id });
  if (!deletedProduct) return res.send(" No product with that id ");

  return res.status(StatusCodes.OK).send({ deletedProduct });
}
