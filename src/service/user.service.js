const {
  getAllUsersDB,
  createUsersDB,
  getUserByIdDB,
  updateUserByIdDB,
  patchUserDB,
  deleteUserByIdDB,
} = require("../repository/user.repository");

async function getAllUsers() {
  const data = await getAllUsersDB();
  if (!data.length) throw new Error("user is empty");
  return data;
}

async function createUsers(name, surname, email, pwd) {
  const data = await createUsersDB(name, surname, email, pwd);
  if (!data.length) throw new Error("user is empty");
  return data;
}

async function getUserById(id) {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error("id is not found");
  return data;
}

async function updateUserById(id, name, surname, email, pwd) {
  const data = await updateUserByIdDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error("id is not found");
  return data;
}

async function patchUser(id, clientObj) {
  const data = await patchUserDB(id, clientObj);
  if (!data.length) throw new Error("id is not found");
  return data;
}

async function deleteUserById(id) {
  const data = await deleteUserByIdDB(id);
  if (!data.length) throw new Error("user data is empty");

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
