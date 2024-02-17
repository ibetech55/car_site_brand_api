import { CreateMultipleModelsController } from "../../Controllers/Model/CreateMultipleModelsController";
import { CreateMultipleModelsUseCase } from "../../Presentation/Model/CreateMultipleModelsUseCase";
import { ModelRepository } from "../../Repositories/Model/model.repository";
import { ExcelHandler } from "../../Utils/ExcelHandler";

const modelRepository = new ModelRepository();
const excelHandler = new ExcelHandler();
const createMultipleModelsUseCase = new CreateMultipleModelsUseCase(modelRepository, excelHandler);
const createMultipleModelsController = new CreateMultipleModelsController(createMultipleModelsUseCase);
export { createMultipleModelsUseCase, createMultipleModelsController };
