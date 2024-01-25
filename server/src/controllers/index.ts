import express from "express";
import { UserController } from "./users";
import { WebController } from "./web";


const router = express.Router();

router.post("/admin/login", UserController.checkAdminLogin);
router.post("/register", WebController.CustomerController.checkCustomerRegister)


export default router;