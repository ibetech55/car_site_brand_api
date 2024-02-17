import { GetModelsByMakeIdController } from "../../Controllers/Model/GetModelsByMakeIdController";
import { GetModelsByMakeIdMapper } from "../../Mappers/Model/GetModelByMakeIdMapper";
import { GetModelsByMakeIdUseCase } from "../../Presentation/Model/GetModelsByMakeId";
import { ModelRepository } from "../../Repositories/Model/model.repository";

const modelRepository = new ModelRepository();
const getModelsByMakeIdMapper = new GetModelsByMakeIdMapper();
const getModelsByMakeIdUseCase = new GetModelsByMakeIdUseCase(modelRepository, getModelsByMakeIdMapper);
const getModelsByMakeIdController = new GetModelsByMakeIdController(getModelsByMakeIdUseCase);

export { getModelsByMakeIdController, getModelsByMakeIdUseCase };
