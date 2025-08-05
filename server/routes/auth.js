import express from "express";
import { createUser, loginUser, UpdatePassword } from "../controller/auth.js";
const router = express.Router()

router.post("/signup" , createUser)
router.post("/login" , loginUser)
router.patch("/change-password" , UpdatePassword)
export default router