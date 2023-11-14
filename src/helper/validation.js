const ExceptionType = require("../exception/exception");

function isValidTaskBody(req, res, next) {
  if (!task) throw new Error(ExceptionType.TASK_TITLE_EMPTY);
  if (!isNaN(task)) throw new Error(ExceptionType.TASK_TITLE_INVALID);
  if (!user_id) throw new Error(ExceptionType.TASK_TITLE_EMPTY);
  next();
}
