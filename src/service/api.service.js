const bcrypt = require("bcrypt");
const {
  getUserByEmail,
  createUserDB,
} = require("../repository/api.repository");
const salt = 10;

async function createUser(name, surname, email, pwd) {
  const user = await getUserByEmail(email);
  if (user.length) throw new Error("user has already exist");

  const hashPWD = await bcrypt.hash(pwd, salt);

  const data = await createUserDB(name, surname, email, hashPWD);
  if (!data.length) throw new Error("not created");
  return data;
}

module.exports = { createUser, authUser };
