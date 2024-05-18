import { UpdateModelController } from "../../Controllers/Model/UpdateModelController";
import { UpdateModelUseCase } from "../../Presentation/Model/UpdateModelUseCase";
import { MakeRepository } from "../../Repositories/Make/make.repository";
import { ModelRepository } from "../../Repositories/Model/model.repository";

const modelRepository = new ModelRepository();
const makeRepositpry = new MakeRepository();
const updateModelUseCase = new UpdateModelUseCase(modelRepository, makeRepositpry);
const updateModelController = new UpdateModelController(updateModelUseCase);

export { updateModelController, updateModelUseCase };
