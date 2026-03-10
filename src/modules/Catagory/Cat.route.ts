import { Router } from "express";
import { catService } from "./Cat.service";
import { CategoryController } from "./Cat.controller";
const router = Router();



router.get("/allCategory", CategoryController.getCategoryController);



router.post("/Category", CategoryController.postCategoryController);

export const catRout = router;
