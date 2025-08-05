import mongoose from "mongoose";

const LoanRequestSchem = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  applicantId: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("LoanRequest", LoanRequestSchem);
