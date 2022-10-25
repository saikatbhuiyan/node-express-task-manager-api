const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: true,
});
