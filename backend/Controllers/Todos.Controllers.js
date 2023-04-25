const Todo = require("../Models/TodoModel");

// product api's
module.exports.getAlltodos = async (req, res) => {
  try {
    const result = await Todo.find({});
    if (result) {
      res.status(200).json({
        message: "Data fetched Successfully",
        status: true,
        data: result,
      });
    } else {
      res.status(200).json({
        message: "Failed to fetch!",
        status: false,
      });
    }
  } catch (error) {
    res.status(200).json({
      message: error.message,
      status: false,
    });
  }
};

module.exports.addTodo = async (req, res) => {
  try {
    const product = req.body;
    const result = await Todo.create(product);
    if (result) {
      res.status(200).json({
        message: "Data Added Successfully",
        status: true,
        data: result,
      });
    } else {
      res.status(200).json({
        message: "Failed to add!",
        status: false,
      });
    }
  } catch (error) {
    res.status(200).json({
      message: error.message,
      status: false,
    });
  }
};

module.exports.getTodoId = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Todo.findById(id);
    if (result) {
      res.status(200).json({
        message: "Data fetched Successfully",
        status: true,
        data: result,
      });
    } else {
      res.status(200).json({
        message: "Failed to fetch!",
        status: false,
      });
    }
  } catch (error) {
    res.status(200).json({
      message: error.message,
      status: false,
    });
  }
};
module.exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Todo.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({
        message: "Data deleted Successfully",
        status: true,
        data: result,
      });
    } else {
      res.status(200).json({
        message: "Failed to Delete!",
        status: false,
      });
    }
  } catch (error) {
    res.status(200).json({
      message: error.message,
      status: false,
    });
  }
};
module.exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const change = req.body;
    if (change) {
      const result = await Todo.findByIdAndUpdate(id, change);
      if (result) {
        res.status(200).json({
          message: "Data Updated Successfully",
          status: true,
        });
      } else {
        res.status(200).json({
          message: "Failed to update!",
          status: false,
        });
      }
    }
  } catch (error) {
    res.status(200).json({
      message: error.message,
      status: false,
    });
  }
};
