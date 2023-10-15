const mongoose = require("mongoose");

// process.env.REACT_APP_MONGODB_URI || "mongodb://localhost/sparks",

mongoose.connect(
  "mongodb+srv://ahudg:lovelyLATINd4n13l@cluster0.lzyuzlz.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
