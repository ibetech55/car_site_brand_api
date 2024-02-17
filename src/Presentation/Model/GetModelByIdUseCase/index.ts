import { GetModelDto } from "../../../Data/Model/GetModelDtos";
import { Models } from "../../../Entities/models";
import { GetModelMapper } from "../../../Mappers/Model/GetModelMapper";
import { IModelRepository } from "../../../Repositories/Model/IModelRepository";

export class GetModelByIdUseCase {
  private _repository: IModelRepository;
  private _mapper: GetModelMapper;
  constructor(repository: IModelRepository, mapper: GetModelMapper) {
    this._repository = repository;
    this._mapper = mapper;
  }

  async execute(id: string): Promise<GetModelDto> {
    const data: Models = await this._repository.getById(id);
    const mappedData: GetModelDto = this._mapper.map(data);
    return mappedData;
  }
}
