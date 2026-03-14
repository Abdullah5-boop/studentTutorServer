import { Router, Request, Response } from "express";
import { userController } from "./User.Controller";
import { middlewares } from "../../../lib/Middleware";
const router = Router();
router.get("/alluser",userController.getAllUserController)
router.put("/userStatus",middlewares.validation('ADMIN'), userController.banAndUnbanUserController)

export const userRoute=router