// A Simple Express JS TODO Application

// import all dependencies
import express from "express";
import todos_router from "./routes/todo.js";
import connectToMongoDB from "./database/mongo.js";
import dotenv from "dotenv";

dotenv.config();

// Initialize express app

// TODO: apply an application middleware to log the URL on which API is hit. Also print the APP_NAME every time. Log will look like:- "express-todo API Hit on URL"

const app = express();

app.use(express.json());


// connect to mongoDB
await connectToMongoDB();

// use the todos router
app.use("/api", todos_router);

const PORT = process.env.APP_PORT ?? 3000;

// start the server on the port
app.listen(PORT, () => {
  console.log(`Server started on the PORT ${PORT}`);
});
