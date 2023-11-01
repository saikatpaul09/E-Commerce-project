import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModal.js";

//@desc   Fetch all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  if (products) {
    res.json(products);
  } else {
    throw new Error("Some error");
  }
});


//@desc   Fetch products by id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById };
