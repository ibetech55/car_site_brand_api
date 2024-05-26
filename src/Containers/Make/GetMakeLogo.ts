import { GetMakeLogoController } from "../../Controllers/Make/GetMakeLogoController";
import { GetMakeLogoUseCase } from "../../Presentation/Make/GetMakeLogoUseCase";
import { MakeRepository } from "../../Repositories/Make/make.repository";
import { FileHandler } from "../../Utils/FileHandler";

const makeRepository = new MakeRepository();
const fileHandler = new FileHandler();
const getMakeLogoUseCase = new GetMakeLogoUseCase(makeRepository, fileHandler);
const getMakeLogoController = new GetMakeLogoController(getMakeLogoUseCase);

export { getMakeLogoUseCase, getMakeLogoController };
