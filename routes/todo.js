// define all the related APIs

// import all the controllers
import {
  get_todos_controller,
  post_todos_controller,
} from "../controllers/index.js";

import express from "express";

const router = express.Router();

/*
REST is about resources, and plural reflects a collection of resources.
It aligns with database-style thinking: you retrieve from the users table, not user.
It's more intuitive and predictable. That's why /todos
*/

router.get("/todos", get_todos_controller);

router.get("/todos/:id", get_todos_controller);

router.post("/todos", post_todos_controller);

// router.put("/todos", null);

// router.delete("/todos", null);

export default router;
