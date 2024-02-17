import { UpdateModelController } from "../../Controllers/Model/UpdateModelController";
import { UpdateModelUseCase } from "../../Presentation/Model/UpdateModelUseCase";
import { ModelRepository } from "../../Repositories/Model/model.repository";

const modelRepository = new ModelRepository();
const updateModelUseCase = new UpdateModelUseCase(modelRepository);
const updateModelController = new UpdateModelController(updateModelUseCase);

export { updateModelController, updateModelUseCase };
