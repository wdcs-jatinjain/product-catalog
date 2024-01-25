import express from "express";
import { UserController } from "./users";


const router = express.Router();

router.post("/admin/login", UserController.checkAdminLogin);


export default router;