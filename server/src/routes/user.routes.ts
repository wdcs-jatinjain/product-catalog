import express from "express";
import registerUser from '../controllers/user/index';

export const router = express.Router();

router.post("/register", registerUser);

export default router;
