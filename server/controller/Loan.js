import Application from "../model/Application.js";

export const applyForLoan = async (req, res) => {
  try {
    const body = req.body;
    const response = await Application.create(body);
    console.log(response, "response");
    res.status(200).json({
      message: "Applied Successfully!",
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
