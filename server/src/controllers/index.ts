import express from "express";
import AdminController from "./admin";
import WebController from "./web";

const router = express.Router();

router.use("/admin", AdminController);
router.use("/web", WebController)

export default router;