import { GetMakesController } from "../../Controllers/Make/GetMakesController";
import { GetMakeMapper } from "../../Mappers/Make/GetMakeMapper";
import { GetMakesUseCase } from "../../Presentation/Make/GetMakesUseCase";
import { MakeRepository } from "../../Repositories/Make/make.repository";
import { HandleQuery } from "../../Utils/HandleQuery";


const makeRepository = new MakeRepository();
const getMakesMapper = new GetMakeMapper();
const handleQuery = new HandleQuery();
const getMakesUseCase = new GetMakesUseCase(makeRepository, getMakesMapper, handleQuery);
const getMakesController = new GetMakesController(getMakesUseCase);

export { getMakesController, getMakesUseCase };
