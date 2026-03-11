import { Router } from "express";
import { catService } from "./Cat.service";
import { CategoryController } from "./Cat.controller";
import { prisma } from "../../../lib/prisma";
const router = Router();

router.get("/allCategory", CategoryController.getCategoryController);
router.post("/Category", CategoryController.postCategoryController);
// router.delete("/Category", async (req, res) => {
//     try {
//         const { id } = req.body;
//         console.log(id);

//         const result = await prisma.category.delete({
//             where: { id: id }
//         });

//         return res.status(200).json({
//             message: "Category deleted successfully",
//             data: result
//         });

//     } catch (error) {
//         return res.status(500).json({
//             message: "Delete failed",
//             error: error
//         });
//     }
// });

router.delete("/Category", CategoryController.deleteCategoryController);


export const catRout = router;
