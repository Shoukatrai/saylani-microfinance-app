import jwt from "jsonwebtoken";
import User from "../model/User.js";

export const authCheck = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log("token", token);
    if (!token)
      return res.status(401).json({
        message: "No token found",
      });

    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};



export const adminAuthCheck = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log("token", token);

    if (!token) {
      return res.status(401).json({ 
        status : false,
        message: "No token found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    console.log("decoded", decoded);

    const user = await User.findById(decoded.id);
    if (!user || user.userType !== "admin") {
      return res.status(403).json({status : false, message: "You are not allowed" });
    }

    req.userId = user._id;
    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    return res.status(401).json({ status : false,message: "Invalid or expired token" });
  }
};
