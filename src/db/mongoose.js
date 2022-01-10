const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://sami:<password>@saikat.2ccr0.mongodb.net/task?retryWrites=true&w=majority";

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});
