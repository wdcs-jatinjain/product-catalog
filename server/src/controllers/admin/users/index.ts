import express from "express";

import addUser from "./addUser";
import getAllUsers from "./getAllUsers";
import deleteUser from "./deleteUser";
import editSingleUser from "./editSingleUser";
import getUser from "./getUser";
import doLogin from "./doLogin";
import checkLogin from "./checkLogin";

const UserController = express.Router();

UserController.post("/do-login", doLogin);
UserController.post("/check-login", checkLogin);
UserController.post("/create", addUser);
UserController.get("/get", getUser);
UserController.get("/getAll", getAllUsers);
UserController.delete("/delete", deleteUser);
UserController.patch("/edit", editSingleUser);
export default UserController;




