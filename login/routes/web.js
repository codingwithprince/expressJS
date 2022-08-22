import express from "express";
import userController from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", userController.home);
router.get("/login", userController.login);
router.get("/reg", userController.reg);
router.post("/reg", userController.regPost);



export default router;
