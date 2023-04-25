const { default: mongoose } = require("mongoose");
const todoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide a name"],
      trim: true,
    },
    desc: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
