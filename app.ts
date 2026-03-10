import express from "express";
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import { router } from "better-auth/api";
import { profileRouter } from "./src/modules/profile/Profile.route";
import { tutorProfileRouter } from "./src/modules/TutorProfil/Tutor.Route";
import { availabilityRouter } from "./src/modules/Availability/Availabilty.route";
import { bookingRouter } from "./src/modules/Booking/Booking.route";
import { prisma } from "./lib/prisma";
import { catRout } from "./src/modules/Catagory/Cat.route";

const app = express();

app.use(cors({
  origin:"http://localhost:3000",
   credentials: true,               
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]

}));



app.use(express.json());




app.all("/api/auth/*", toNodeHandler(auth));



app.get("/", (req, res) => {
  console.log("Received a request to the root endpoint");
  res.send({name:'abdullah'})
  res.send({ message: "Hello, World! from server " });
});
app.use('/v1', profileRouter)
app.use('/v1', tutorProfileRouter)
app.use('/v1', availabilityRouter);
app.use('/v1', bookingRouter)
app.use("/v1", catRout)



app.get('/user', async (req,res) =>{
const result = await prisma.user.findMany()
console.log(result)
res.send(result)
// res.send({name:'abdullah'})

})

export default app;
