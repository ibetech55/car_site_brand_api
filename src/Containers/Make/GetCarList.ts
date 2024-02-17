import { GetCarListController } from "../../Controllers/Make/GetCarListController";
import { GetCarListMapper } from "../../Mappers/Make/GetCarListMapper";
import { GetCarListUseCase } from "../../Presentation/Make/GetCarListUseCase";
import { MakeRepository } from "../../Repositories/Make/make.repository";

const makeRepository = new MakeRepository();
const getCarListMapper = new GetCarListMapper();
const getCarListUseCase = new GetCarListUseCase(makeRepository, getCarListMapper);
const getCarListController = new GetCarListController(getCarListUseCase);

export { getCarListController, getCarListUseCase };
