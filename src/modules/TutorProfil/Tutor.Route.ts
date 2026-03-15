import { Router, Request, Response } from "express";
import { tutorProfileController } from "./Tutor.Controller";


const router = Router();
router.get("/TutorProfile", tutorProfileController.tutorProfileGetController);

router.post("/TutorProfile", tutorProfileController.tutorProfileCreateController);
router.put("/TutorProfile/:id", tutorProfileController.tutorProfileUpdateController);
router.post("/TutorAvailabilitySlot/:id", tutorProfileController.tutorAvailabilitySlot);

export const tutorProfileRouter = router;