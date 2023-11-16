const ExceptionType = require("../exception/exception");

function isValidUserBody(req, res, next) {
  const { name, surname, email, pwd } = req.body;

  if (!isNaN(name)) throw new Error(ExceptionType.USER_NAME_INVALID);
  if (!name) throw new Error(ExceptionType.USER_NAME_IS_EMPTY);
  if (!isNaN(surname)) throw new Error(ExceptionType.USER_SURNAME_INVALID);
  if (!surname) throw new Error(ExceptionType.USER_SURNAME_IS_EMPTY);
  if (!email) throw new Error(ExceptionType.USER_EMAIL_IS_EMPTY);
  if (!/^[A-z-9+\.\_\-+]+@+[a-z]+\.+[a-z]+/gm.test(email))
    throw new Error(ExceptionType.USER_EMAIL_INVALID);
  if (!pwd) throw new Error(ExceptionType.USER_PWD_IS_EMPTY);
  if (pwd.length < 8) throw new Error(ExceptionType.USER_PWD_INVALID);

  next();
}

function isValidTaskBody(req, res, next) {
  const { task, user_id } = req.body;

  if (!task) throw new Error(ExceptionType.TASK_TITLE_EMPTY);
  if (!isNaN(task)) throw new Error(ExceptionType.TASK_TITLE_INVALID);
  if (isNaN(user_id)) throw new Error(ExceptionType.TASK_USER_ID_INVALID);
  if (!user_id) throw new Error(ExceptionType.TASK_USER_ID_EMPTY);

  next();
}

function isValidId(req, res, next) {
  const { id } = req.params;

  if (isNaN(id)) throw new Error(ExceptionType.ID_NOT_A_NUMBER);
  if (id < 1) throw new Error(ExceptionType.ID_NEGATIVE);

  next();
}

module.exports = { isValidTaskBody, isValidId, isValidUserBody };
