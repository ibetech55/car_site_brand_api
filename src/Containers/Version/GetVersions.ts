import { GetVersionsController } from "../../Controllers/Version/GetVersionsController";
import { GetVersionMapper } from "../../Mappers/Version/GetVersionMapper";
import { GetVersionsUseCase } from "../../Presentation/Version/GetVersionsUseCase";
import { VersionRepository } from "../../Repositories/Version/version.repository";
import { HandleQuery } from "../../Utils/HandleQuery";

const versionRepository = new VersionRepository();
const getVersionMapper = new GetVersionMapper();
const handleQuery = new HandleQuery();
const getVersionsUseCase = new GetVersionsUseCase(versionRepository, handleQuery, getVersionMapper);
const getVersionsController = new GetVersionsController(
  getVersionsUseCase
);

export { getVersionsUseCase, getVersionsController };
