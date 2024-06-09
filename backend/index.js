import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import bodyParser from "body-parser";

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
  const { message } = request.body;
  console.log("Received message:", message);

  response
    .status(200)
    .json({ status: "success", message: `Message received: ${message}` });
});

app.listen(PORT, () => {
  console.log(`App is running in port: ${PORT}`);
});
