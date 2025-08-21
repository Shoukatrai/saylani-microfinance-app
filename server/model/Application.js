import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    createBy:{
      type : String,
      required : true
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
    quaguarantors: [
      {
        name: {
          type: String,
          required: true,
          default: null,
        },
        email: {
          type: String,
          required: true,
          default: null,
        },
        location: {
          type: String,
          required: true,
          default: null,
        },
        cnic: {
          type: String,
          required: true,
          default: null,
        },
      },
    ],
    address: {
      type: String,
      required: true,
      default: null,
    },
    status: {
      type: String,
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
    laonAmout: {
      type: String,
      required: true,
      min : 0
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

export default mongoose.model("Application" , applicationSchema)