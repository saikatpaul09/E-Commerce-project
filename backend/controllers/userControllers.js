import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc Auth user & get token
//@route POST /api/users
//@access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    //generate token
    generateToken(res, user._id);

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
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    //generate token
    generateToken(res, user._id);
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }
});

//@desc logout user / clear cookie
//@route POST /api/users/logout
//@access private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "logged out succesfully" });
});

//@desc logout user / clear cookie
//@route POST /api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@desc update user
//@route POST /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

//@desc Get all users
//@route GET/api/users/profile
//@access Private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("all users");
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
