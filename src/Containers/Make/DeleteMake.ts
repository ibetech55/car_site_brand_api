import { DeleteMakeController } from "../../Controllers/Make/DeleteMakeController";
import { DeleteMakeUseCase } from "../../Presentation/Make/DeleteMakeUseCase";
import { MakeRepository } from "../../Repositories/Make/make.repository";


const makeRepository = new MakeRepository();
const deleteMakeUseCase = new DeleteMakeUseCase(makeRepository);
const deleteMakeController = new DeleteMakeController(deleteMakeUseCase);

export { deleteMakeController, deleteMakeUseCase };
