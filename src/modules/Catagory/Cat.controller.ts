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


const deleteCategoryController= async(req:Request, res: Response)=>{
  try{
    let {id} = req.body
    let result = await catService.deleteCatgoryService(id)
    res.send({message:"cat delete successful ",result:result})

  }catch(error){
     res.send({message:"cat is not delete  ",error})

  }
}
export const CategoryController = {
  getCategoryController,
  postCategoryController,deleteCategoryController
};
