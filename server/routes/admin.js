import express from "express";
import { createLoan, getLoans, loanStatusUpdate } from "../controller/admin.js";
import { adminAuthCheck, authCheck } from "../middleware/auth.js";
const router = express.Router();

router.post("/create-loan", adminAuthCheck, createLoan);
router.get("/admin-loan", adminAuthCheck, getLoans);
router.patch("/admin-loan/:id", adminAuthCheck, loanStatusUpdate);
export default router;
