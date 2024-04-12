import express from "express";
import {
  addOrderItems,
  getMyorders,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
  getOrderById,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, admin, getAllOrders);
router.route("/:id").get(protect, admin, getOrderById);

export default router;
