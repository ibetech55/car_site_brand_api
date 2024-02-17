import { VerifyMakeController } from "../../Controllers/Make/VerifyMakeController";
import { VerifyMakeUseCase } from "../../Presentation/Make/VerifyMakeUseCase";
import { MakeRepository } from "../../Repositories/Make/make.repository";

const makeRepository = new MakeRepository();
const verifyMakeUseCase = new VerifyMakeUseCase(makeRepository);
const verifyMakeController = new VerifyMakeController(verifyMakeUseCase);

export { verifyMakeController, verifyMakeUseCase };
