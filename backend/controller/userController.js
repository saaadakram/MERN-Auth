import asynchandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const authUser = asynchandler(async (req, res) => {
  res.status(200).json({ message: "auth user" });
});

const registereUser = asynchandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    res.status(400);
    throw new Error("User already registered");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User");
  }
});

const logoutUser = asynchandler(async (req, res) => {
  res.status(200).json({ message: "Logout user" });
});

const getUserProfile = asynchandler(async (req, res) => {
  res.status(200).json({ message: "Get user" });
});

const updateUserProfile = asynchandler(async (req, res) => {
  res.status(200).json({ message: "update user" });
});
export {
  authUser,
  registereUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
