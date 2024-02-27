import express from "express";
import checkAdminLogin from "./checkAdminLogin";
import addUser from "./addUser";
import getAllUsers from "./getAllUsers";
import deleteUser from "./deleteUser";
import editSingleUser from "./editSingleUser";
import getUser from "./getUser";

const UserController = express.Router();

UserController.post("/login", checkAdminLogin);
UserController.post("/create", addUser);
UserController.get("/get", getUser);
UserController.get("/getAll", getAllUsers);
UserController.delete("/delete", deleteUser);
UserController.patch("/edit", editSingleUser);
export default UserController;
