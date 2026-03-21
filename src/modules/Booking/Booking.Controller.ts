import { bookingServer } from "./Booking.Service";
import { Request, Response } from "express";
const bookingGetController = async (req: any, res: any) => {
  try {
    let result = await bookingServer.bookingGetService();
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error in booking get controller", details: error });
  }
};

const bookingCreateController = async (req: Request, res: Response) => {
  try {
    console.log("hitted ......");
    let { tutorId, slotId } = req.body;
    console.log("controller ......");
    console.log(req.body);
    console.log("controller ......");
    let studentId = req.User?.id || "";
    let status = "CONFIRMED" as const;
    let newData = { tutorId, slotId, studentId, status };
    console.log(" bookingCreateController ", newData);
    let result = await bookingServer.bookingCreateService(newData);
    res.json({ statue: true, result });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error in booking create controller", details: error });
  }
};
const bookingDeleteController = async (req: any, res: any) => {
  try {
    let result = await bookingServer.bookingDeleteService(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      statue: false,
      error: "Error in booking delete controller",
      details: error,
    });
  }
};

const GetAStudentBookedCoursesController = async (
  req: Request,
  res: Response,
) => {
  try {
    let id = req.User?.id;
    let result = await bookingServer.GetAStudentBookedCoursesService(
      id as string,
    );
    res.send({ status: true, result });
  } catch (error) {
    res.send({ status: false, error });
  }
};

export const bookingController = {
  bookingGetController,
  bookingCreateController,
  bookingDeleteController,
  GetAStudentBookedCoursesController,
};
