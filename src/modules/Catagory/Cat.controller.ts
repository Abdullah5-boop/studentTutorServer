import { catService } from "./Cat.service";
import { Request, Response } from "express";
const getCategoryController = async (req: Request, res: Response) => {
  try {
    const result = await catService.getAllCatService();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const postCategoryController = async (req: Request, res: Response) => {
  try {
const { catName: name, catdes: description } = req.body;
    const result = await catService.postCatService({ name, description });
    res.send(result);

  } catch (error) {
    res.send(error);
  }
};

export const CategoryController = {
  getCategoryController,
  postCategoryController,
};
