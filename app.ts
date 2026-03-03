import express from "express";
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import { router } from "better-auth/api";
import { profileRouter } from "./src/modules/profile/Profile.route";
import { tutorProfileRouter } from "./src/modules/TutorProfil/Tutor.Route";
import { availabilityRouter } from "./src/modules/Availability/Availabilty.route";
import { bookingRouter } from "./src/modules/Booking/Booking.route";
const app = express();

app.use(cors());
app.use(express.json());
app.all("/api/auth/*", toNodeHandler(auth));



app.get("/", (req, res) => {
  console.log("Received a request to the root endpoint");
  res.send({ message: "Hello, World! from server " });
});
app.use('/v1', profileRouter)
app.use('/v1', tutorProfileRouter)
app.use('/v1', availabilityRouter);
app.use('/v1', bookingRouter)

export default app;
