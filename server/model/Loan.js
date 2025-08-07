import { default as mongoose } from "mongoose";

const loanSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  subCategory: {
    type: String,
  },
  maxAmount: {
    type: String,
  },
  tenure: {
    type: String,
  },
  desc: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Loan", loanSchema);
