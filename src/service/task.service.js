const {
  getAllTasksDB,
  createTaskDB,
  deleteTaskDB,
  patchTaskDB,
} = require("../repository/task.repository");
const ExceptionType = require("../exception/exception");

async function getAllTasks(id, title) {
  const data = await getAllTasksDB(id, title);
  if (!data.length) throw new Error(ExceptionType.DB_GET_TASKS_NOT_FOUND);
  return data;
}

async function createTask(task, user_id) {
  const data = await createTaskDB(task, user_id);
  if (!data.length) throw new Error(ExceptionType.DB_POST_TASK_NOT_CREATE);
  return data;
}

async function deleteTask(id) {
  const data = await deleteTaskDB(id);
  if (!data.length) throw new Error("task is empty");
  return data;
}

async function patchTask(id, clientObj) {
  const data = await patchTaskDB(id, clientObj);
  if (!data.length) throw new Error("task is empty");
  return data;
}
module.exports = { getAllTasks, createTask, deleteTask, patchTask };
