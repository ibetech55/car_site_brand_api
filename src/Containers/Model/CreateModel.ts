import { CreateModelController } from "../../Controllers/Model/CreateModelController";
import { CreateModelUseCase } from "../../Presentation/Model/CreateModelUseCase";
import { ModelRepository } from "../../Repositories/Model/model.repository";

const modelRepository = new ModelRepository();
const createModelUseCase = new CreateModelUseCase(modelRepository);
const createModelController = new CreateModelController(createModelUseCase);

export { createModelController, createModelUseCase };
