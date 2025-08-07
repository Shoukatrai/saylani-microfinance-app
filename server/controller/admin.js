import Loan from "../model/Loan.js";

export const createLoan = async (req, res) => {
  try {
    const response = await Loan.create(req.body);
    console.log("response", response);
    res.status(200).json({
      message: "Loan Created",
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

export const getLoans = async (req, res) => {
  try {
    const response = await Loan.find();
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

export const loanStatusUpdate = async (req, res) => {
  try {
    const obj = {
      isActive: req.body.isActive,
    };
    const id = req.params.id
    const response = await Loan.findByIdAndUpdate(id, obj);
    console.log("response", response);
    res.status(200).json({
      message: "Loan Status Updated",
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
