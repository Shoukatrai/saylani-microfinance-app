import express from "express";
import { applyForLoan, getAllLoan, getAllLoanApplications, getLoanFilter } from "../controller/Loan.js";
import { authCheck } from "../middleware/auth.js";
const router = express.Router()

router.post("/apply" , authCheck,applyForLoan)
router.get("/filter" , getLoanFilter)
router.get("/allLoan" , getAllLoan)
router.get("/allApplications" ,authCheck ,  getAllLoanApplications)

export default router