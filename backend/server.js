import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
dotenv.config();
const port = process.env.PORT || 5000;
connectDB(); // connect to db
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running");
});

// cookie-parser
app.use(cookieParser());

//cors midleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["POST", "GET"],
  })
);

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server running on port ${port}`));
