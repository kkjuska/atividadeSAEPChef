import { Router } from "express";
import { userController } from "../controller/userController.js";

const router = Router();

router.get('/user/login', userController.getByLogin);

export default router;