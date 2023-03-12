const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require('dotenv').config()

console.log("process.env.MONGO_URI",process.env.MONGO_URI);
module.exports = mongoose.connect(process.env.MONGO_URI,
//     {
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useNewUrlParser : true,
//     useFindAndModify : false
// },
    err => {
    // if (err) {
    //     console.log(`Error in DB Connection ${err}`);
    // }
    // else {
    //     console.log(`MongoDB Connection Suceeded...`);
    // }
    if(err) throw err;
   console.log('Connected to MongoDB!!!',err)
});

