import { GetMakeDto, IGetMake } from "../../../Data/Make/GetMakeDto";
import { Makes } from "../../../Entities/makes";
import { GetMakeMapper } from "../../../Mappers/Make/GetMakeMapper";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";

export class GetMakeByIdUseCase {
  private _repository: IMakeRepository;
  private _mapper: GetMakeMapper;
  constructor(repository: IMakeRepository, mapper: GetMakeMapper) {
    this._repository = repository;
    this._mapper = mapper;
  }

  async execute(id: string): Promise<GetMakeDto> {
    const data: Makes = await this._repository.getById(id);
    const mappedData: GetMakeDto = this._mapper.map(data);
    return mappedData;
  }
}
