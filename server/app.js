import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/dbConection.js";
import authRouter from "./routes/auth.js";
import loanRouter from "./routes/loan.js";
import cors from "cors";
const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//routes
app.use("/api/auth", authRouter);
app.use("/api/loan", loanRouter);

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
