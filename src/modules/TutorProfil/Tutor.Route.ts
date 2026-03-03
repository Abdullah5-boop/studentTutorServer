import { Router, Request, Response } from "express";
import { tutorProfileController } from "./Tutor.Controller";


const router = Router();
router.get("/TutorProfile", tutorProfileController.tutorProfileGetController);

router.post("/TutorProfile", tutorProfileController.tutorProfileCreateController);
router.put("/TutorProfile/:id", tutorProfileController.tutorProfileUpdateController);

export const tutorProfileRouter = router;