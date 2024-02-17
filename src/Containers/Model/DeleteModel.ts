import { DeleteModelController } from "../../Controllers/Model/DeleteModelController";
import { DeleteModelUseCase } from "../../Presentation/Model/DeleteModelUseCase";
import { ModelRepository } from "../../Repositories/Model/model.repository";

const modelRepository = new ModelRepository();
const deleteModelUseCase = new DeleteModelUseCase(modelRepository);
const deleteModelController = new DeleteModelController(deleteModelUseCase);

export { deleteModelController, deleteModelUseCase };
