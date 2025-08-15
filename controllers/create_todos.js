// Controller to create new TODOs in the DB

// import todosDB from "../database/todo.js";
import todo from "../models/todo.js";

export default async (req, res) => {
  // read the request body
  if (
    req.body == undefined ||
    req.body.data == undefined ||
    req.body.data.length == 0
  ) {
    // send 400 bad request
    res.status(400).json({
      success: false,
      message: "Invalid Inputs",
      error: "request body can't be empty",
    });
    return;
  }

  // we are receiving the array of TODOs, so append all of it to the existing array
  // todosDB.push(...req.body.data); // using spread operator. Read also rest operator

  const savedTodos = await todo.insertMany(req.body.data);

  res.status(201).json({
    success: true,
    message: "resource created sucessfully",
    data: savedTodos, // send the latest data
  });
};
