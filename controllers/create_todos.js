// Controller to create new TODOs in the DB

import todosDB from "../database/todo.js";

export default (req, res) => {
  // TODO: implement a mechanism to keep ID field unique. Calculate in the code itself and do not send in the request payload.

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
  todosDB.push(...req.body.data); // using spread operator. Read also rest operator

  res.status(201).json({
    success: true,
    message: "resource created sucessfully",
    data: todosDB, // send the latest data
  });
};
