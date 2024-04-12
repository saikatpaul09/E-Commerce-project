import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//post
//private
const addOrderItems = asynchandler(async (req, res) => {
  res.send("add order items");
});

//get by id
//private
const getOrderById = asynchandler(async (req, res) => {
  res.send("add order items");
});

// get
//private
const getMyorders = asynchandler(async (req, res) => {
  res.send("add order items");
});

//update
//admin
const updateOrderToPaid = asynchandler(async (req, res) => {
  res.send("add order items");
});

//update
//admin
const updateOrderToDelivered = asynchandler(async (req, res) => {
  res.send("add order items");
});

//get all orders
//private admin
const getAllOrders = asynchandler(async (req, res) => {
  res.send("add order items");
});

export {
  addOrderItems,
  getMyorders,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
  getOrderById,
};
