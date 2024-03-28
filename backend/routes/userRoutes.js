import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  updateUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
} from "../controllers/userControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/register").post(registerUser).get(protect, admin, getUsers);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route(":/id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
export default router;
