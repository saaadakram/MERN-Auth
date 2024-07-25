import express from "express";
import {
  authUser,
  registereUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controller/userController.js";
const router = express.Router();

router.post("/", registereUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.get("/getUser", getUserProfile);
router.put("/updateUser", updateUserProfile);

export default router;
