// endpoint to update the todos, if already exists, if does not exist, create them
import { validateBody } from "../helpers/validation.js";
import todoModel from "../models/todo.js";

export default async (req, res) => {
  // validate if the the request body - return if it does not contain the body
  const reqBody = req.body;

  try {
    validateBody(reqBody);
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
    return;
  }

  // get the data from the request body - array form
  const todoData = reqBody.data;

  await Promise.all(
    todoData.map((todo) =>
      todoModel.findOneAndUpdate(
        todo.id ? { _id: todo.id } : { name: todo.name },
        {
          name: todo.name,
          status: todo.status,
        },
        { new: true, upsert: true }
      )
    )
  );
  /*
  Promise.all takes that array of Promises and runs them in parallel (at the same time).

  It returns a single Promise that:

  Resolves when all the individual Promises resolve.
 
  Rejects immediately if any one of them fails (throws an error).
  [
    Promise<doc1>,
    Promise<doc2>,
    Promise<doc3>,
    ...
  ]

  let arr = [1, 2, 3];
  let doubled = arr.map(x => x * 2);
  console.log(doubled); // [2, 4, 6]
  map() takes each element of the array

  Calls your callback with it

  Stores the return value into a new array

  Returns that new array

  When MongoDB does an insert as part of an upsert, it creates the new document from:

  The filter fields you provided

  The update fields you provided

  If todo.id is missing, the filter is { name: todo.name }.

  If no document matches that name, MongoDB will insert a new document that includes:

  name from the filter
  name and status from the update
  (if a field is in both, the update value wins — here it’s the same value anyway)
  a generated _id

  */
  res.status(200).json({
    success: true,
    message: "records updated successfully",
  });
};
