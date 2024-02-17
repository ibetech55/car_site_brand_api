import { UpdateVersionController } from "../../Controllers/Version/UpdateVersionController";
import { UpdateVersionUseCase } from "../../Presentation/Version/UpdateVersionUseCase";
import { VersionRepository } from "../../Repositories/Version/version.repository";

const versionRepository = new VersionRepository();
const updateVersionUseCase = new UpdateVersionUseCase(versionRepository);
const updateVersionController = new UpdateVersionController(
  updateVersionUseCase
);

export { updateVersionUseCase, updateVersionController };
