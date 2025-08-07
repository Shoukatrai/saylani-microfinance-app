import User from "../model/User.js";
import { generatePassword } from "../utils/passwordGenerator.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { userPassUpdateTemplate } from "../templates/userPasswordUpdate.js";
import LoanRequest from "../model/ApplicationRequest.js";
export const createUser = async (req, res) => {
  try {
    const { email, password, ...rest } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        status: false,
        message: "Email already exists!",
        data: null,
      });
    }

    const rawPassword = password || generatePassword(16);
    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    const userObj = {
      email,
      ...rest,
      password: hashedPassword,
    };

    const createdUser = await User.create(userObj);

    //send email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });
    console.log("createUser befor if", createdUser);
    if (!password) {
      console.log("createdUser", createdUser);
      const mailOptions = {
        from: process.env.USER_EMAIL,
        to: createdUser.email,
        subject: "USER VERIFICATION",
        html: userPassUpdateTemplate(rawPassword),
      };

      const loanObj = {
        ...rest,
        email,
        applicantId: createdUser._id,
      };
      const LoanRequestResponse = await LoanRequest.create(loanObj);
      console.log("LoanRequestResponse", LoanRequestResponse);
      const emailResponse = await transporter.sendMail(mailOptions);
    }

    res.status(200).json({
      status: true,
      message: "SignUp Completed!",
      data: createdUser,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const response = await User.findOne({ email });
    if (!response) {
      return res.status(400).json({
        status: false,
        message: "User not Found!",
        data: null,
      });
    }

    const checkPassword = await bcrypt.compare(password, response.password);
    if (!checkPassword) {
      return res.status(400).json({
        status: false,
        message: "Password or email is incorrect!",
        data: null,
      });
    }

    const token = jwt.sign({ id: response._id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: "7d",
    });

    

    return res.status(200).json({
      status: true,
      message: "Login successful!",
      data: response,
      token, 
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};

export const UpdatePassword = async (req, res) => {
  try {
    const { email, newPassword, oldPassword } = req.body;

    const user = await User.findOne({ email });
    console.log("User found:", user);

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "User not found!",
        data: null,
      });
    }

    const isOldPasswordCorrect = await bcrypt.compare(
      oldPassword,
      user.password
    );

    if (!isOldPasswordCorrect) {
      return res.status(400).json({
        status: false,
        message: "Old password is incorrect!",
        data: null,
      });
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = newHashedPassword;
    await user.save();

    return res.status(200).json({
      status: true,
      message: "Password updated successfully!",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};
