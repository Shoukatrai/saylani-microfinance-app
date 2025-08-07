import express from "express";
import { applyForLoan, getAllLoan, getLoanFilter } from "../controller/Loan.js";
import { authCheck } from "../middleware/auth.js";
const router = express.Router()

router.post("/apply" , authCheck,applyForLoan)
router.get("/filter" , getLoanFilter)
router.get("/allLoan" , getAllLoan)

export default router