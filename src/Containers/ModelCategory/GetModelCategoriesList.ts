import { GetModelCategoriesListController } from "../../Controllers/ModelCategories/GetModelCategoriesListController";
import { GetModelCategoriesListUseCase } from "../../Presentation/ModelCategory/GetModelCategoriesListUseCase";
import { ModelCategoryRepository } from "../../Repositories/ModelCategory/ModelCategoryRepository";

const modelCategoriesRepository = new ModelCategoryRepository();
const getModelCatgeoriesListUseCase = new GetModelCategoriesListUseCase(
  modelCategoriesRepository
);
const getModelCategoriesListController = new GetModelCategoriesListController(getModelCatgeoriesListUseCase)

export { getModelCatgeoriesListUseCase, getModelCategoriesListController };
