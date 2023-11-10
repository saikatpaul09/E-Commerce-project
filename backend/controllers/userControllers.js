import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/productModal.js";

//@desc Auth user & get token
//@route POST /api/users
//@access public
const authUser = asyncHandler(async (req, res) => {});

//@desc login user
//@route POST /api/users/register
//@access private
const registerUser = asyncHandler(async (req, res) => {});

//@desc logout user / clear cookie
//@route POST /api/users/logout
//@access private
const logoutUser = asyncHandler(async (req, res) => {});

//@desc logout user / clear cookie
//@route POST /api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send();
});

//@desc update user
//@route POST /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send();
});

//@desc Get all users
//@route GET/api/users/profile
//@access Private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send();
});

//@desc Delete users
//@route DELETE /api/users/:id
//@access Private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send();
});

//@desc Get user by id
//@route GET/api/users/:id
//@access Private/admin
const getUserById = asyncHandler(async (req, res) => {
  res.send();
});

//@desc Update user
//@route GET/api/users/:id
//@access Private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send();
});

export {
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  updateUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers
};
