import { Router, Request, Response } from "express";
import { profileController } from "./Profile.Controller";

const router = Router();

router.get("/Profile", (req: Request, res: Response) => {
 profileController.profileGetController(req, res);
});
router.put("/Profile/:id", (req: Request, res: Response) => {
    profileController.profileUpdateController(req, res);
});


export const profileRouter = router;
