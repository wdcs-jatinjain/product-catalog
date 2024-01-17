import express from "express";
import checkAdminLogin from "../../views/user/checkadminlogin";
import registerUser from '../../views/user/index';


const router = express.Router();

router.post("/register", registerUser);
router.post("/api/admin/login", checkAdminLogin);

export default router;
