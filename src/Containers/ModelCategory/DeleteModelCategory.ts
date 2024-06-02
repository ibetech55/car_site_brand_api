import { DeleteModelCategoryUseCase } from "../../Presentation/ModelCategory/DeleteModelCategoryUsecase";
import { DeleteModelCategoryController } from "../../Controllers/ModelCategories/DeleteModelCategoryController";
import { ModelCategoryRepository } from "../../Repositories/ModelCategory/ModelCategoryRepository";

const modelCategoryRepository = new ModelCategoryRepository();
const deleteModelCategoryUseCase = new DeleteModelCategoryUseCase(modelCategoryRepository)
const deleteModelCategoryController = new DeleteModelCategoryController(deleteModelCategoryUseCase)

export {deleteModelCategoryController, deleteModelCategoryUseCase}