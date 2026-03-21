import { Request, Response } from "express";
import { reviewService } from "./Review.service";

const getAllReviewOnePostController = async (req: Request, res: Response) => {
  try {
    let slotId = "";
    let { id } = req.params;
    if (typeof id === "string") {
      // safe to use
      slotId = id;
    }
    let result = await reviewService.getAllReviewOnePostService({ slotId });
    console.log({ status: true, result: result, userDetails: req.User });
    res.send({ status: true, result: result, userDetails: req.User });
  } catch (error) {
    res.send({ status: false, error });
  }
};

const postOneReviewController = async (req: Request, res: Response) => {
  let { id, tutorId, rating, comment, slotId } = req.body;
  console.log(".....",req.body);
  let studentId = "";
  // let tutorId = "";

  if (req.User && typeof req.User.id === "string") {
    studentId = req.User.id;
  }
  try {
    let result = await reviewService.postOneReviewServive({
      studentId,
      tutorId,
      rating: 5,
      comment,
      slotId,
    });
    console.log(result);
    res.send({ status: true, result });
    // let id,studentId,tutorId,rating,comment,slotId}= req.body
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
export const reviewController = {
  getAllReviewOnePostController,
  postOneReviewController,
};
