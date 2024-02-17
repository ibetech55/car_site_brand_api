import { ChangeMakeLogoController } from "../../Controllers/Make/ChangeMakeLogoController";
import { ChangeMakeLogoUseCase } from "../../Presentation/Make/ChangeMakeLogoUseCase";
import { MakeRepository } from "../../Repositories/Make/make.repository";
import { FileHandler } from "../../Utils/FileHandler";

const makeRepository = new MakeRepository();
const fileHandler = new FileHandler();
const changeMakeLogoUseCase = new ChangeMakeLogoUseCase(makeRepository, fileHandler);
const changeMakeLogoController = new ChangeMakeLogoController(changeMakeLogoUseCase);

export { changeMakeLogoController, changeMakeLogoUseCase };
