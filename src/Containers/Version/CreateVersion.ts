import { CreateVersionController } from "../../Controllers/Version/CreateVersionController";
import { CreateVersionUseCase } from "../../Presentation/Version/CreateVersionUseCase";
import { VersionRepository } from "../../Repositories/Version/version.repository";

const versionRepository = new VersionRepository();
const createVersionUseCase = new CreateVersionUseCase(versionRepository);
const createVersionController = new CreateVersionController(
  createVersionUseCase
);

export { createVersionUseCase, createVersionController };
