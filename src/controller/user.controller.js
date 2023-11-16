const express = require("express");
const buildResponse = require("../helper/buildResponse");
const {
  getAllUsers,
  createUsers,
  getUserById,
  updateUserById,
  patchUser,
  deleteUserById,
} = require("../service/user.service");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const data = await getAllUsers();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post("/", async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUsers(name, surname, email, pwd);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 405, error.message);
  }
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUserById(id, name, surname, email, pwd);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const clientObj = req.body;
    const data = await patchUser(id, clientObj);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteUserById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
