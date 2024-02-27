import express from "express";
import UserController from "./users";
import RolesController from "./roles";

const AdminController = express.Router();

AdminController.use("/user", UserController);
AdminController.use("/roles", RolesController)
export default AdminController;
