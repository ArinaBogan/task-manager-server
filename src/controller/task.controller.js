const express = require("express");
const buildResponse = require("../helper/buildResponse");
const {
  getAllTasks,
  createTask,
  deleteTask,
  patchTask,
} = require("../service/task.service");
const { isValidTaskBody } = require("../helper/validation");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const data = await getAllTasks(id, title);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post("/", async (req, res) => {
  try {
    const { task, user_id } = req.body;
    const data = await createTask(task, user_id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete("/", async (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteTask(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.patch("/", async (req, res) => {
  try {
    const { id } = req.params;
    const clientObj = req.body;
    const data = patchTask(id, clientObj);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
