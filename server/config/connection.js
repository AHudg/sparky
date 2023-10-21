const mongoose = require("mongoose");

// process.env.MONGODB_URI ||

mongoose.connect("mongodb://127.0.0.1:27017/sparks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
