import { Router } from "express";
import { body, query, validationResult } from "express-validator";
import { getModelCategoriesController } from "../Containers/ModelCategory/GetModelCategories";
import { createModelCategoryController } from "../Containers/ModelCategory/CreateModelCategory";
import { getModelCategoriesListController } from "../Containers/ModelCategory/GetModelCategoriesList";

const modelCategoryRoutes = Router();
modelCategoryRoutes.get("/model_category", (req, res) =>
  getModelCategoriesController.handle(req, res)
);
modelCategoryRoutes.post(
  "/model_category",
  [body("type").exists().trim().escape().notEmpty()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    createModelCategoryController.handle(req, res);
  }
);
modelCategoryRoutes.get("/model_category/list", (req, res) =>
  getModelCategoriesListController.handle(req, res)
);

export { modelCategoryRoutes };
