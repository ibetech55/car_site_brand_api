import { DeleteVersionController } from "../../Controllers/Version/DeleteVersionController";
import { DeleteVersionUseCase } from "../../Presentation/Version/DeleteVersionUseCase";
import { VersionRepository } from "../../Repositories/Version/version.repository";

const versionRepository = new VersionRepository();
const deleteVersionUseCase = new DeleteVersionUseCase(versionRepository);
const deleteVersionController = new DeleteVersionController(
  deleteVersionUseCase
);

export { deleteVersionUseCase, deleteVersionController };
