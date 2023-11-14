import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//@desc Auth user & get token
//@route POST /api/users
//@access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user?.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

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
  getUsers,
};
