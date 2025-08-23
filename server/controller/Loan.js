import Application from "../model/Application.js";
import Loan from "../model/Loan.js";
import QRCode from "qrcode";
export const applyForLoan = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("userId", userId);
    const obj = {
      ...req.body,
      createBy: userId,
    };
    const body = req.body;
    const response = await Application.create(obj);
    const loanInfo = response
    let qrCodeUrl = await QRCode.toDataURL(loanInfo);
    console.log(qrCodeUrl, "qrCodeUrl");
    res.status(200).json({
      message: "Applied Successfully!",
      status: true,
      data: response,
      qrCodeUrl : qrCodeUrl
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

export const getLoanFilter = async (req, res) => {
  try {
    const { category } = req.query;
    const response = await Loan.find({ category: category, isActive: true });
    res.status(200).json({
      message: "Filtered loans",
      status: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

export const getAllLoan = async (req, res) => {
  try {
    const response = await Loan.find({ isActive: true });
    console.log("response", response);
    res.status(200).json({
      message: "Loan Receioved",
      status: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

export const getAllLoanApplications = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("userId", userId);
    const response = await Application.find({ createBy: userId });
    console.log("response", response);
    res.status(200).json({  
      message: "All Applications",
      status: true,
      data: response,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};
