import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    createBy: {
      type: String,
      required: true,
    },
    loanId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    cnic: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      default: null,
    },
    subCategory: {
      type: String,
      required: true,
      default: null,
    },
    contactNumber: {
      type: String,
      required: true,
      default: null,
    },
    gurantorName: {
      type: String,
      required: true,
      default: null,
    },
    gurantorCnic: {
      type: String,
      required: true,
      default: null,
    },
    gurantorContactNumber: {
      type: String,
      required: true,
      default: null,
    },
    address: {
      type: String,
      required: true,
      default: null,
    },
    status: {
      type: String,
      default: "PENDING",
      enum: [
        "PENDING",
        "UNDER_REVIEW",
        "APPROVED",
        "REJECTED",
        "DISBURSED",
        "REPAID",
        "DEFAULTED",
        "CANCELLED",
      ],
    },
    laonAmount: {
      type: String,
      required: true,
      min: 0,
    },
    interestRate: {
      type: Number,
      default: 0,
      min: 0,
    },
    installmentAmount: {
      type: Number,
      default: 0,
      min: 0,
    },
    tenureMonths: {
      type: Number,
      default: 0,
      min: 0,
    },
    remainingAmount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Application", applicationSchema);
