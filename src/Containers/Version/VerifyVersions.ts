import { VerifyVersionsController } from "../../Controllers/Version/VerifyVersionsController";
import { VerifyVersionsUseCase } from "../../Presentation/Version/VerifyVersionsUseCase";
import { VersionRepository } from "../../Repositories/Version/version.repository";

const versionRepository = new VersionRepository();
const verifyVersionsUseCase = new VerifyVersionsUseCase(versionRepository);
const verifyVersionsController = new VerifyVersionsController(
  verifyVersionsUseCase
);

export { verifyVersionsUseCase, verifyVersionsController };
