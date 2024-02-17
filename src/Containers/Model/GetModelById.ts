import { GetModelByIdController } from "../../Controllers/Model/GetModelByIdController";
import { GetModelMapper } from "../../Mappers/Model/GetModelMapper";
import { GetModelByIdUseCase } from "../../Presentation/Model/GetModelByIdUseCase";
import { ModelRepository } from "../../Repositories/Model/model.repository";


const modelRepository = new ModelRepository();
const getModelByIdMapper = new GetModelMapper();
const getModelByIdUseCase = new GetModelByIdUseCase(modelRepository, getModelByIdMapper);
const getModelByIdController = new GetModelByIdController(getModelByIdUseCase);

export { getModelByIdController, getModelByIdUseCase };
