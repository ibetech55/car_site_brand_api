import { Router } from "express";
import { body, query, validationResult } from "express-validator";
import { getModelCategoriesController } from "../Containers/ModelCategory/GetModelCategories";
import { createModelCategoryController } from "../Containers/ModelCategory/CreateModelCategory";
import { getModelCategoriesListController } from "../Containers/ModelCategory/GetModelCategoriesList";
import { deleteModelCategoryController } from "../Containers/ModelCategory/DeleteModelCategory";
import { updateModelCategoryController } from "../Containers/ModelCategory/UpdateModelCategory";
import { getModelCategoryByIdController } from "../Containers/ModelCategory/GetModelCategoryById";

const modelCategoryRoutes = Router();
modelCategoryRoutes.get("/model_category", (req, res) =>
  getModelCategoriesController.handle(req, res)
);
modelCategoryRoutes.get("/model_category/list", (req, res) =>
  getModelCategoriesListController.handle(req, res)
);
modelCategoryRoutes.get("/model_category/:id", (req, res) =>
  getModelCategoryByIdController.handle(req, res)
);

modelCategoryRoutes.post("/model_category", (req, res) =>
  createModelCategoryController.handle(req, res)
);

modelCategoryRoutes.delete("/model_category/:id", (req, res) =>
  deleteModelCategoryController.handle(req, res)
);

modelCategoryRoutes.put("/model_category/:id", (req, res) =>
  updateModelCategoryController.handle(req, res)
);

export { modelCategoryRoutes };
