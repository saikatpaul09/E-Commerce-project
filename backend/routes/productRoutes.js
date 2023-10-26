import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModal.js";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = Product.find();
    if (products) {
      res.json(products);
    } else {
      throw new Error("Some error");
    }
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
