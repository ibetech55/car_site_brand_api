import { CreateMakeController } from "../../Controllers/Make/CreateMakeController";
import { CreateMakeUseCase } from "../../Presentation/Make/CreateMakeUseCase";
import { MakeRepository } from "../../Repositories/Make/make.repository";
import { FileHandler } from "../../Utils/FileHandler";

const makeRepository = new MakeRepository();
const fileHandler = new FileHandler();
const createMakeUseCase = new CreateMakeUseCase(makeRepository, fileHandler);
const createMakeController = new CreateMakeController(createMakeUseCase);

export { createMakeController, createMakeUseCase };
