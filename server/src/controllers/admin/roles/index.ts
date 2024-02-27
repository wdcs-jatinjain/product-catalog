import express from "express";
import getAllRoles from "./getAllRoles";

const RolesController = express.Router();

RolesController.get("/getAllRoles", getAllRoles);

export default RolesController