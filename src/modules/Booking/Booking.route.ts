import { Router } from "express";
import { bookingController } from "./Booking.Controller";
import { middlewares } from "../../../lib/Middleware";
const router = Router();

router.get('/booking', middlewares.validation("ADMIN") ,bookingController.bookingGetController);
router.get('/bookingOne', middlewares.validation("ADMIN","USER") ,bookingController.GetAStudentBookedCoursesController);



router.post('/booking',middlewares.validation("USER") ,bookingController.bookingCreateController);
router.put('/booking/:id', (req, res) => {
    res.send('Update booking working on');
});

router.delete('/booking/:id', bookingController.bookingDeleteController);

export const bookingRouter = router;