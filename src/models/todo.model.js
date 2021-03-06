const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
     {
          userId: {
               type: mongoose.Schema.Types.ObjectId,
               ref: "User",
               required: true
          },
          text: {
               type: String,
               required: true,
          },
          time: {
               type: Date,
               required: true,
          },
          status: {
               type: String,
               required: true,
          },
          category: {
               type: String,
               required: true,
          },
     },
     {
          timestamps: true
     }
);


module.exports = mongoose.model("todo", todoSchema)
