import { CreateMultipleModelsController } from "../../Controllers/Model/CreateMultipleModelsController";
import { CreateMultipleModelsUseCase } from "../../Presentation/Model/CreateMultipleModelsUseCase";
import { MakeRepository } from "../../Repositories/Make/make.repository";
import { ModelRepository } from "../../Repositories/Model/model.repository";
import { ModelCategoryRepository } from "../../Repositories/ModelCategory/ModelCategoryRepository";
import { ExcelHandler } from "../../Utils/ExcelHandler";

const modelRepository = new ModelRepository();
const makeRepository = new MakeRepository();
const modelCategoryRepository = new ModelCategoryRepository();
const excelHandler = new ExcelHandler();
const createMultipleModelsUseCase = new CreateMultipleModelsUseCase(modelRepository, makeRepository, modelCategoryRepository, excelHandler);
const createMultipleModelsController = new CreateMultipleModelsController(createMultipleModelsUseCase);
export { createMultipleModelsUseCase, createMultipleModelsController };
