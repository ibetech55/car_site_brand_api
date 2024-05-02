import { CreateModelCategoryController } from "../../Controllers/ModelCategories/CreateModelCategoryController";
import { CreateModelCategoryUseCase } from "../../Presentation/ModelCategory/CreateModelCategoryUseCase";
import { ModelCategoryRepository } from "../../Repositories/ModelCategory/ModelCategoryRepository";

const modelCategoriesRepository = new ModelCategoryRepository();
const createModelCatgeoryUseCase = new CreateModelCategoryUseCase(
  modelCategoriesRepository
);
const createModelCategoryController = new CreateModelCategoryController(createModelCatgeoryUseCase)

export { createModelCatgeoryUseCase, createModelCategoryController };
