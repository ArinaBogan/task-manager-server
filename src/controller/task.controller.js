const express = require("express");
const { buildResponse } = require("../helper/buildResponse");
const {
  getAllTasks,
  createTask,
  deleteTask,
  patchTaskById,
  getTaskById,
} = require("../service/task.service");
const { isValidTaskBody, isValidId } = require("../helper/validation");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const data = await getAllTasks();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post("/", isValidTaskBody, async (req, res) => {
  try {
    const { task, user_id } = req.body;
    const data = await createTask(task, user_id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.patch("/:id", isValidId, isValidTaskBody, async (req, res) => {
  try {
    const { id } = req.params;
    const clientObj = req.body;
    const data = await patchTaskById(id, clientObj);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete("/:id", isValidId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteTask(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get("/:id", isValidId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = getTaskById(id);
    buildResponse(res, 202, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

// 1. get by id, update
// 2. написать validation для user. isValidUserBody
// (!name, !surname, !email,!pwd, !isNaN(name),!isNaN(surname), pwd.length<8, проверка почты (через регулярку)
// 3. exception type для user
// поддерживая стилистику  task
// например:
// DB_GET_USERS_NOT_FOUND

module.exports = route;
