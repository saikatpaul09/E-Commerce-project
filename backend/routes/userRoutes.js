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

const router = express.Router();

router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
