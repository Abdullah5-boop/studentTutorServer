import { Router } from "express";
import { availabilityController } from "./Availability.Controller";
import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";
const router = Router();

router.get("/Availability", availabilityController.avilabilityGetController);

router.post(
  "/Availability",
  availabilityController.avilabilityCreateController,
);
router.put("/Availability/:id", (req, res) => {
  res.send("Update availability working on");
});

router.get("/OneSlot/:id", availabilityController.GetOneAvailabilityController);

router.delete(
  "/Availability/:id",
  availabilityController.avilabilityDeleteController,
);
router.get("/allCat", availabilityController.getAllCatController);


router.get("/filter", async (req: Request, res: Response) => {
  try {
    let data = req.body;
        console.log(data.value)
    let Result = await prisma.availabilitySlot.findMany({
      where: {
        AND: [
          
          {
          subject:{
           in:data.value 
          }
        }],
      },
    });

    res.send(Result);

  } catch (error) {
    res.send(error);
  }
});



export const availabilityRouter = router;
