import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/dbConection.js";
import authRouter from "./routes/auth.js";
import loanRouter from "./routes/loan.js";
import adminRouter from "./routes/admin.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(cookieParser())
//routes
app.use("/api/auth", authRouter);
app.use("/api/loan", loanRouter);
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API is running....");
});
try {
  await dbConnection();
  console.log("DB connected");
} catch (err) {
  console.error("DB connection failed", err);
}

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`server running on http://localhost:${PORT}`)
  );
}

export default app;