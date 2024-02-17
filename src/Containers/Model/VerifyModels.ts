import { VerifyModelsController } from "../../Controllers/Model/VerifyModelsController";
import { VerifyModelsUseCase } from "../../Presentation/Model/VerifyModelsUseCase";
import { ModelRepository } from "../../Repositories/Model/model.repository";

const modelRepository = new ModelRepository();
const verifyModelsUseCase = new VerifyModelsUseCase(modelRepository);
const verifyModelsController = new VerifyModelsController(verifyModelsUseCase);

export { verifyModelsController, verifyModelsUseCase };
