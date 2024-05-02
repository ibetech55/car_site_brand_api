import { GetModelCategoriesController } from "../../Controllers/ModelCategories/GetModelCategoriesController";
import { GetModelCategoriesUseCase } from "../../Presentation/ModelCategory/GetModelCategoriesUseCase";
import { ModelCategoryRepository } from "../../Repositories/ModelCategory/ModelCategoryRepository";

const modelCategoriesRepository = new ModelCategoryRepository();
const getModelCatgeoriesUseCase = new GetModelCategoriesUseCase(
  modelCategoriesRepository
);
const getModelCategoriesController = new GetModelCategoriesController(getModelCatgeoriesUseCase)

export { getModelCatgeoriesUseCase, getModelCategoriesController };
