import swaggerJsDoc from "swagger-jsdoc";
import dotenv from "dotenv";

dotenv.config(); // Load .env if not already loaded in server.js

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chat App API",
      version: "1.0.0",
      description: "API documentation for the Chat App",
      contact: {
        name: "Your Name",
        url: process.env.SWAGGER_SERVER_URL || "http://localhost:5000",
        email: "your-email@example.com",
      },
    },
    servers: [
      {
        url: process.env.SWAGGER_SERVER_URL || "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
export default swaggerDocs;
