import asynchandler from "express-async-handler";

const authUser = asynchandler(async (req, res) => {
  res.status(200).json({ message: "auth user" });
});

const registereUser = asynchandler(async (req, res) => {
  res.status(200).json({ message: "Register user" });
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
export { authUser, registereUser, logoutUser, getUserProfile, updateUserProfile };
