import { Router, Request, Response } from "express";
import { tutorProfileController } from "./Tutor.Controller";
import { middlewares } from "../../../lib/Middleware";


const router = Router();
router.get("/TutorProfile",middlewares.validation("TUTOR"), tutorProfileController.tutorProfileGetController);

router.get("/tutorPofileExist", tutorProfileController.tutorProfileExistController)
// router.post("/TutorProfile", tutorProfileController.tutorProfileCreateController);
router.put("/TutorProfile/:id", tutorProfileController.tutorProfileUpdateController);
router.post("/TutorAvailabilitySlot/:id", middlewares.validation("TUTOR"), tutorProfileController.tutorAvailabilitySlot);
router.get("/schedule",middlewares.validation("TUTOR"),
    
    tutorProfileController.GettutorScheduleController)

export const tutorProfileRouter = router;