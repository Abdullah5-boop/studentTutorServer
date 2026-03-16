import { Router, Request, Response } from "express";
import { tutorProfileController } from "./Tutor.Controller";
import { middlewares } from "../../../lib/Middleware";


const router = Router();
router.get("/TutorProfile", tutorProfileController.tutorProfileGetController);

router.get("/tutorPofileExist", tutorProfileController.tutorProfileExistController)
// router.post("/TutorProfile", tutorProfileController.tutorProfileCreateController);
router.put("/TutorProfile/:id", tutorProfileController.tutorProfileUpdateController);
router.post("/TutorAvailabilitySlot/:id", middlewares.validation("TUTOR"), tutorProfileController.tutorAvailabilitySlot);

export const tutorProfileRouter = router;