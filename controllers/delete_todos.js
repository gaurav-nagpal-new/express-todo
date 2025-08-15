// delete todo with ID passed in query string parameter

import todo from "../models/todo.js";
import { validateID } from "../helpers/validation.js";

export default async (req, res) => {
  // get the id from the query string
  const id = req.query.id;

  // id not passed
  if (!id) {
    res.status(400).json({
      success: false,
      message: "invalid inputs",
      error: "id cannot be empty0",
    });
    return;
  }

  // check if it is invalid object ID
  try {
    validateID(id);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
    return;
  }

  // delete the todo with the id and return the deleted todo in response
  const deletedTodo = await todo.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: "request processed successfully",
    data: deletedTodo,
  });
};
