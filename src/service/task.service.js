const {
  getAllTasksDB,
  createTaskDB,
  deleteTaskDB,
  patchTaskByIdDB,
  getTaskByIdDB,
  updateTaskDB
} = require("../repository/task.repository");
const ExceptionType = require("../exception/exception");

async function getAllTasks() {
  const data = await getAllTasksDB();
  if (!data.length) throw new Error(ExceptionType.DB_GET_TASKS_NOT_FOUND);
  return data;
}

async function createTask(task, user_id) {
  const data = await createTaskDB(task, user_id);
  if (!data.length) throw new Error(ExceptionType.DB_POST_TASK_NOT_CREATE);
  return data;
}

async function updateTask(id, task, user_id) {
  const data = await updateTaskDB(id, task, user_id);
  if (!data.length) throw new Error(ExceptionType.DB_PUT_TASK_NOT_UPDATE);

  return data;
}

async function patchTaskById(id, clientObj) {
  const data = await patchTaskByIdDB(id, clientObj);
  if (!data.length) throw new Error(ExceptionType.DB_PATCH_TASK_NOT_PATCH);
  return data;
}

async function deleteTask(id) {
  const data = await deleteTaskDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_DELETE_TASK_NOT_DELETE);
  return data;
}

async function getTaskById(id) {
  const data = await getTaskByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_GET_TASK_BY_ID_NOT_FOUND);
  return data;
}

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  patchTaskById,
  getTaskById,
  updateTask
};
