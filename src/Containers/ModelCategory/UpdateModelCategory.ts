import { UpdateModelCategoryController } from "../../Controllers/ModelCategories/UpdateModelCategoryController";
import { UpdateModelCategoryUseCase } from "../../Presentation/ModelCategory/UpdateModelCategoryUsecase";
import { ModelCategoryRepository } from "../../Repositories/ModelCategory/ModelCategoryRepository";

const modelCategoryRepository = new ModelCategoryRepository();
const updateModelCategoryUseCase = new UpdateModelCategoryUseCase(modelCategoryRepository)
const updateModelCategoryController = new UpdateModelCategoryController(updateModelCategoryUseCase)

export {updateModelCategoryController, updateModelCategoryUseCase}