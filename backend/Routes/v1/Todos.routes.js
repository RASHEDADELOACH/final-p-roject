const express = require("express");
const {
  getAlltodos,
  addTodo,
  getTodoId,
  deleteTodo,
  updateTodo,
} = require("../../Controllers/Todos.Controllers");
const TokenVerify = require("../../Middlewares/TokenVerify");
const router = express.Router();

router.route("/", TokenVerify).get(getAlltodos).post(addTodo);
router
  .route("/:id", TokenVerify)
  .get(getTodoId)
  .delete(deleteTodo)
  .patch(updateTodo);

module.exports = router;
