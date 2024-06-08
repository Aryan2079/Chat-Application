import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import bodyParser from "body-parser";
// const bodyParser = require("body-parser");
// const cors = require("cors");

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("hello world");
});

app.post("/api/messages", (request, response) => {
  //   console.log(request.body);
  const { message } = request.body;
  //   console.log("HELLO1");
  console.log("Received message:", message);

  // Optionally, you can send a response back to the client
  response
    .status(200)
    .json({ status: "success", message: `Message received: ${message}` });
  // .send(`message received: ${message}`)
});

app.listen(PORT, () => {
  console.log(`App is running in port: ${PORT}`);
});
