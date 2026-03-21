import { Router } from "express";
import { availabilityController } from "./Availability.Controller";
import { Request,Response } from "express";
const router = Router();

router.get('/Availability', availabilityController.avilabilityGetController);

router.post('/Availability', availabilityController.avilabilityCreateController);
router.put('/Availability/:id', (req, res) => {
    res.send('Update availability working on');
});

router.get("/OneSlot/:id", availabilityController.GetOneAvailabilityController)

router.delete('/Availability/:id', availabilityController.avilabilityDeleteController);

export const availabilityRouter = router;