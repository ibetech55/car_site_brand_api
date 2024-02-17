import { GetVersionByIdController } from "../../Controllers/Version/GetVersionByIdController";
import { GetVersionMapper } from "../../Mappers/Version/GetVersionMapper";
import { GetVersionByIdUseCase } from "../../Presentation/Version/GetVersionByIdUseCase";
import { VersionRepository } from "../../Repositories/Version/version.repository";

const versionRepository = new VersionRepository();
const getVersionMapper = new GetVersionMapper();
const getVersionByIdUseCase = new GetVersionByIdUseCase(versionRepository, getVersionMapper);
const getVersionByIdController = new GetVersionByIdController(
  getVersionByIdUseCase
);

export { getVersionByIdUseCase, getVersionByIdController };
