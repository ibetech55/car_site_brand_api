import { CreateMultipleMakesController } from "../../Controllers/Make/CreateMultipleMakesController";
import { CreateMultipleMakesUseCase } from "../../Presentation/Make/CreateMultipleMakesUseCase";
import { MakeRepository } from "../../Repositories/Make/make.repository";
import { ExcelHandler } from "../../Utils/ExcelHandler";

const makeRepository = new MakeRepository();
const excelHandler = new ExcelHandler();
const createMultipleMakesUseCase = new CreateMultipleMakesUseCase(makeRepository, excelHandler);
const createMultipleMakesController = new CreateMultipleMakesController(createMultipleMakesUseCase);

export { createMultipleMakesUseCase, createMultipleMakesController };
