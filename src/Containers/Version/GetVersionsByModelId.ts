import { GetVersionsByModelIdController } from "../../Controllers/Version/GetVersionsByModelIdController";
import { GetVersionsByModelIdMapper } from "../../Mappers/Version/GetVersionsByModelId";
import { GetVersionsByModelIdUseCase } from "../../Presentation/Version/GetVersionsByModelId";
import { VersionRepository } from "../../Repositories/Version/version.repository";

const versionRepository = new VersionRepository();
const getVersionsByModelIdMapper = new GetVersionsByModelIdMapper();
const getVersionsByModelIdUseCase = new GetVersionsByModelIdUseCase(versionRepository, getVersionsByModelIdMapper);
const getVersionsByModelIdController = new GetVersionsByModelIdController(
  getVersionsByModelIdUseCase
);

export { getVersionsByModelIdUseCase, getVersionsByModelIdController };
