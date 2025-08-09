// This controller will fetch and return all the todos objects from the todosDB
import todoDB from "../database/todo.js";

export default (req, res) => {
  // check if request contains the id path parameter, if it contains only return the matched object
  const todoID = req.params.id;
  if (todoID !== undefined) {
    // search in the todoDB array
    todoDB.forEach((todo) => {
      if (todoID == todo.ID) {
        // when found return the response
        res.status(200).json({
          success: true,
          message: "Data fetched successfully",
          data: [todo],
        });
        return;
      }
    });
    // if todo not found, then send the 404 code
    res.status(404).json({
      success: false,
      message: `TODO not found with ID:${todoID}`,
    });
    return;
  }

  // otherwise return the whole response
  res.status(200).json({
    success: true,
    message: "Data fetched successfully",
    data: todoDB,
  });
};
