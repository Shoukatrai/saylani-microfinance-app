import express from "express";
import { applyForLoan } from "../controller/Loan.js";
const router = express.Router()

router.post("/apply" , applyForLoan)

export default router