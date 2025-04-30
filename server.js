import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swaggerConfig.js";

// Load environment variables
dotenv.config();

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const app = express();

// Define PORT
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Test API Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

// Import and use routes
import authRoutes from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import userRoute from "./routes/user.routes.js";

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  
  console.error("⚠️ Error:", message);

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
