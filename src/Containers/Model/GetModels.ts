import { GetModelsController } from "../../Controllers/Model/GetModelsController";
import { GetModelMapper } from "../../Mappers/Model/GetModelMapper";
import { GetModelsUseCase } from "../../Presentation/Model/GetModelsUseCase";
import { ModelRepository } from "../../Repositories/Model/model.repository";
import { HandleQuery } from "../../Utils/HandleQuery";


const modelRepository = new ModelRepository();
const handleQuery = new HandleQuery();
const getModelsMapper = new GetModelMapper();
const getModelsUseCase = new GetModelsUseCase(modelRepository, handleQuery, getModelsMapper);
const getModelsController = new GetModelsController(getModelsUseCase);

export { getModelsController, getModelsUseCase };
