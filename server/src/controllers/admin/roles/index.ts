import express from "express";
import getAllRoles from "./getAllRoles";
import createRole from "./createRoles";

const RolesController = express.Router();

RolesController.get("/getAllRoles", getAllRoles);
RolesController.post("/create", createRole);


export default RolesController