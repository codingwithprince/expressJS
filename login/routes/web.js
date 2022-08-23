import express from "express";
import userController from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", userController.home);
router.get("/login", userController.login);
router.post("/login", userController.verifyUser);
router.get("/reg", userController.reg);
router.post("/reg", userController.createUser);



export default router;
