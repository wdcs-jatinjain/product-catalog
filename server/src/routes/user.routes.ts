import express from "express";
import checkAdminLogin from "../controllers/user/checkadminlogin";
import registerUser from '../controllers/user/index';


const router = express.Router();

router.post("/register", registerUser);
router.post("/api/admin/login", checkAdminLogin);

export default router;
