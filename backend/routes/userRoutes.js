import express from "express";
import {
  authUser,
  registereUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", registereUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.get("/getUser", protect, getUserProfile);
router.put("/updateUser", protect, updateUserProfile);

export default router;
