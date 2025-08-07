import express from "express";
import { createUser, loginUser, UpdatePassword } from "../controller/auth.js";
import { authCheck } from "../middleware/auth.js";
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.patch("/change-password", authCheck, UpdatePassword);
export default router;
