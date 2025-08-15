import mongoose from "mongoose";

const validateID = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("invalid ID passed");
  }
  return;
};

const validateBody = (body) => {
  if (!body) {
    throw new Error("empty body passed");
  }
  return;
};

export { validateID, validateBody };
