// define the models/schema for mongoose here

import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const todoModel = mongoose.model("todo", todoSchema);

export default todoModel;
