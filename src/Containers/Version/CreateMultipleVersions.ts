import { CreateMultipleVersionsController } from "../../Controllers/Version/CreateMultipleVersionsController";
import { CreateMultipleVersionsUseCase } from "../../Presentation/Version/CreateMultipleVersionUseCase";
import { VersionRepository } from "../../Repositories/Version/version.repository";
import { ExcelHandler } from "../../Utils/ExcelHandler";

const versionRepository = new VersionRepository();
const excelHandler = new ExcelHandler();
const createMultipleVersionsUseCase = new CreateMultipleVersionsUseCase(versionRepository, excelHandler);
const createMultipleVersionsController = new CreateMultipleVersionsController(
  createMultipleVersionsUseCase
);

export { createMultipleVersionsUseCase, createMultipleVersionsController };
