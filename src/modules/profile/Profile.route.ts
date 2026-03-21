import { Router, Request, Response } from "express";
import { profileController } from "./Profile.Controller";
import { middlewares } from "../../../lib/Middleware";

const router = Router();

router.get("/Profile", 
    middlewares.validation("USER"),
    (req: Request, res: Response) => {
 profileController.profileGetController(req, res);
});
router.put("/Profile/:id", (req: Request, res: Response) => {
    profileController.profileUpdateController(req, res);
});
router.put("/StudentProfile", middlewares.validation("USER") ,profileController.StudentProfileUpdateController);


export const profileRouter = router;
