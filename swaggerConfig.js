import swaggerJsDoc from "swagger-jsdoc"

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chat App API",
      version: "1.0.0",
      description: "API documentation for the Chat App",
      contact: {
        name: "Your Name",
        url: "http://localhost:5000",
        email: "your-email@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to the routes files for automatic documentation generation
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

export default swaggerDocs

