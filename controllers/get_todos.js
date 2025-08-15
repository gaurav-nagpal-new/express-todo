// This controller will fetch and return all the todos objects from the todosDB
// import todoDB from "../database/todo.js";
import { validateID } from "../helpers/validation.js";
import todoModel from "../models/todo.js";

export default async (req, res) => {
  // check if request contains the id path parameter, if it contains only return the matched object
  const todoID = req.params.id;
  if (todoID !== undefined) {
    // search in the todoDB array
    // todoDB.forEach((todo) => {
    //   if (todoID == todo.ID) {
    //     // when found return the response
    //     res.status(200).json({
    //       success: true,
    //       message: "Data fetched successfully",
    //       data: [todo],
    //     });
    //     return;
    //   }
    // });

    // check if it is invalid object ID
    try {
      validateID(todoID);
    } catch (err) {
      res.status(400).json({
        message: err,
      });
      return;
    }

    const todo = await todoModel.findById({ _id: todoID });
    if (!todo) {
      // if todo not found, then send the 404 code
      res.status(404).json({
        success: false,
        message: `TODO not found with ID:${todoID}`,
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: [todo],
    });
    return;
  }

  // get all todos
  const allTodos = await todoModel.find({});
  // otherwise return the whole response
  res.status(200).json({
    success: true,
    message: "Data fetched successfully",
    data: allTodos,
  });
};
