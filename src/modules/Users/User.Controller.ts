import { Request, Response } from "express";
import { userService } from "./User.service";

const getAllUserController = async (req: Request, res: Response) => {
  try {
    let result = await userService.getAlluserService();
    res.status(200).send(result);
  } catch (error) {
    res.status(200).send({ message: "get all user controller", error: error });
  }
};

const banAndUnbanUserController = async (req: Request, res: Response) => {
  try {
    const { id, status } = req.body;

    
    // console.log(req.body)

    const result = await userService.banAndUnbanUserService({
      id: id,
      status: status,
    });
    console.log("_".repeat(50))
    console.log("contoller -> ","\n", {Id: id,Status:  status });
    console.log(result)
    console.log("_".repeat(50))


   res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({name: "controller ", message: error });
  }
};

export const userController = {
  getAllUserController,
  banAndUnbanUserController,
};
