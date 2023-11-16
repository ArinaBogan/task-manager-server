const {
  getAllUsersDB,
  createUsersDB,
  getUserByIdDB,
  updateUserByIdDB,
  patchUserDB,
  deleteUserByIdDB,
} = require("../repository/user.repository");
const ExceptionType = require("../exception/exception");

async function getAllUsers() {
  const data = await getAllUsersDB();
  if (!data.length) throw new Error(ExceptionType.DB_GET_USER_NOT_FOUND);
  return data;
}

async function createUsers(name, surname, email, pwd) {
  const data = await createUsersDB(name, surname, email, pwd);
  if (!data.length) throw new Error(ExceptionType.DB_POST_USER_NOT_CREATE);
  return data;
}

async function getUserById(id) {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_GET_USER_BY_ID_NOT_FOUND);
  return data;
}

async function updateUserById(id, name, surname, email, pwd) {
  const data = await updateUserByIdDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error(ExceptionType.DB_PUT_USER_NOT_UPDATE);
  return data;
}

async function patchUser(id, clientObj) {
  const data = await patchUserDB(id, clientObj);
  if (!data.length) throw new Error(ExceptionType.DB_PATCH_USER_NOT_PATCH);
  return data;
}

async function deleteUserById(id) {
  const data = await deleteUserByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_DELETE_USER_NOT_DELETE);
  return data;
}

module.exports = {
  getAllUsers,
  createUsers,
  getUserById,
  updateUserById,
  patchUser,
  deleteUserById,
};
