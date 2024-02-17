import { GetCarListDto, IGetCarList } from "../../../Data/Make/GetCarListDto";
import { GetCarListMapper } from "../../../Mappers/Make/GetCarListMapper";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";

export class GetCarListUseCase {
  private _makeRepository: IMakeRepository;
  private _mapper: GetCarListMapper;

  constructor(makeRepository: IMakeRepository, mapper: GetCarListMapper) {
    this._makeRepository = makeRepository;
    this._mapper = mapper;
  }

  async execute(): Promise<GetCarListDto[]> {
    const data = await this._makeRepository.getCarList();
    const mappedData: GetCarListDto[] = data.map((x: IGetCarList) =>
      this._mapper.map(x)
    );
    return mappedData;
  }
}
