import { GetModelCategoryByIdController } from "../../Controllers/ModelCategories/GetModelCategoryByIdController";
import { GetModelCategoryByIdUseCase } from "../../Presentation/ModelCategory/GetModelCategoryByIdUseCase";
import { ModelCategoryRepository } from "../../Repositories/ModelCategory/ModelCategoryRepository";

const modelCategoryRepository = new ModelCategoryRepository();
const getModelCategoryByIdUseCase = new GetModelCategoryByIdUseCase(
  modelCategoryRepository
);
const getModelCategoryByIdController = new GetModelCategoryByIdController(
  getModelCategoryByIdUseCase
);

export { getModelCategoryByIdUseCase, getModelCategoryByIdController };
