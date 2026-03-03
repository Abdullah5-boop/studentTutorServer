import { Router } from "express";
import { bookingController } from "./Booking.Controller";
const router = Router();

router.get('/booking', bookingController.bookingGetController);

router.post('/booking', bookingController.bookingCreateController);
router.put('/booking/:id', (req, res) => {
    res.send('Update booking working on');
});

router.delete('/booking/:id', bookingController.bookingDeleteController);

export const bookingRouter = router;