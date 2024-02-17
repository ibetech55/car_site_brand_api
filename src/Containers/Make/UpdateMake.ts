import { UpdateMakeController } from "../../Controllers/Make/UpdateMakeController";
import { UpdateMakeUseCase } from "../../Presentation/Make/UpdateMakeUseCase";
import { MakeRepository } from "../../Repositories/Make/make.repository";


const makeRepository = new MakeRepository();
const updateMakeUseCase = new UpdateMakeUseCase(makeRepository);
const updateMakeController = new UpdateMakeController(updateMakeUseCase);

export { updateMakeController, updateMakeUseCase };
