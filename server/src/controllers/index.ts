import express from "express";
import { UserController } from "./users";
import  CustomerController  from "./customer/index";


const router = express.Router();

router.post("/admin/login", UserController.checkAdminLogin);
console.log('sec')
router.use("/customer", CustomerController)


export default router;