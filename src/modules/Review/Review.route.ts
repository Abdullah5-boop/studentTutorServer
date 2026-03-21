import { Router } from "express";
import { Request, Response } from "express";
import { reviewController } from "./Review.controller";
import { middlewares } from "../../../lib/Middleware";
const route = Router()
route.get("/review/:id",middlewares.validation("USER") , reviewController.getAllReviewOnePostController)

route.post("/review",middlewares.validation("USER") , reviewController.postOneReviewController)

export const reviewRoute =route