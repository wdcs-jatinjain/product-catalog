import express from "express";
import { UserController } from "./users";
import  CustomerController  from "./customer/index";

const router = express.Router();

router.post("/admin/login", UserController.checkAdminLogin);

router.use("/customer", CustomerController)

export default router;