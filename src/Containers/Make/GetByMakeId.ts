import { GetMakeByIdController } from "../../Controllers/Make/GetMakeByIdController";
import { GetMakeMapper } from "../../Mappers/Make/GetMakeMapper";
import { GetMakeByIdUseCase } from "../../Presentation/Make/GetMakebyIdUseCase";
import { MakeRepository } from "../../Repositories/Make/make.repository";


const makeRepository = new MakeRepository();
const getMakesMapper = new GetMakeMapper();
const getMakeByIdUseCase = new GetMakeByIdUseCase(makeRepository, getMakesMapper);
const getMakeByIdController = new GetMakeByIdController(getMakeByIdUseCase);

export { getMakeByIdController, getMakeByIdUseCase };
