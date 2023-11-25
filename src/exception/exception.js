const ExceptionType = {
  USER_NAME_INVALID: "incorrect name",
  USER_NAME_IS_EMPTY: "no name",
  USER_SURNAME_INVALID: "incorrect surname",
  USER_SURNAME_IS_EMPTY: "no surname",
  USER_EMAIL_INVALID: "incorrect email",
  USER_PWD_INVALID: "incorrect pwd",
  USER_PWD_IS_EMPTY: "no pwd",

  DB_GET_USER_NOT_FOUND: "table user is empty",
  DB_GET_USER_BY_ID_NOT_FOUND: "user by id is not found",
  DB_POST_USER_NOT_CREATE: "user does not create",
  DB_PUT_USER_NOT_UPDATE: "user does not update",
  DB_DELETE_USER_NOT_DELETE: "user does not delete",
  DB_PATCH_USER_NOT_PATCH: "user does not patch",

  TASK_TITLE_EMPTY: "no data",
  TASK_TITLE_INVALID: "incorrect task",
  TASK_USER_ID_INVALID: "incorrect user_id",
  TASK_USER_ID_EMPTY: "no user_id",
  ID_NOT_A_NUMBER: "id is not a number",
  ID_NEGATIVE: "id should not be negative",

  DB_GET_TASKS_NOT_FOUND: "table tasks is empty",
  DB_GET_TASK_BY_ID_NOT_FOUND: "task by id is not found",
  DB_POST_TASK_NOT_CREATE: "task does not create",
  DB_PUT_TASK_NOT_UPDATE: "task does not update",
  DB_DELETE_TASK_NOT_DELETE: "task does not delete",
  DB_PATCH_TASK_NOT_PATCH: "task does not patch",

  DB_POST_USER_API_NOT_FOUND: "user has already exist",
  DB_POST_API_NOT_CREATE: "user does not create",
  DB_API_USER_BY_EMAIL: "email is not found",
  PWD_HASHED_MATCH: "password does not match",
};

module.exports = ExceptionType;
