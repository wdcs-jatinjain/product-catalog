import express from "express";
import getAllRoles from "./getAllRoles";
import addRole from "./createRole";
import editRole from "./editRole";
import getRole from "./getRole";
import deleteRole from "./deleteRole";

const RolesController = express.Router();

RolesController.get("/getAllRoles", getAllRoles);
RolesController.get("/getsingleRole", getRole);
RolesController.post("/createRole", addRole);
RolesController.patch("/editRole", editRole);
RolesController.delete("/deleteRole", deleteRole);




export default RolesController