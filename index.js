// A Simple Express JS TODO Application

// import all dependencies
import express from "express";
import todos_router from "./routes/todo.js";

// TODO: Add dotenv dependency and read APP_PORT from .env

// Initialize express app

// TODO: apply an application middleware to log the URL on which API is hit. Also print the APP_NAME every time. Log will look like:- "express-todo API Hit on URL"

const app = express();

app.use(express.json());

// use the todos router
app.use("/api", todos_router);

const PORT = 3000; // TODO: read from env, if not present provide a fallback value

// start the server on the port
app.listen(PORT, () => {
  console.log("Server started on the PORT 3000"); // TODO: Replace PORT with the PORT value with template literals
});

// TODO: add start script in the package.json and run the index.js with npm start
