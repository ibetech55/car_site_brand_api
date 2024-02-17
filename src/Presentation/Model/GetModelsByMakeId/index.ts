import {
  GetModelsByMakeIdDto,
  IGetModelsByMakeId,
} from "../../../Data/Model/GetModelsByMakeIdDto";
import { GetModelsByMakeIdMapper } from "../../../Mappers/Model/GetModelByMakeIdMapper";
import { IModelRepository } from "../../../Repositories/Model/IModelRepository";

export class GetModelsByMakeIdUseCase {
  private _repository: IModelRepository;
  private _mapper: GetModelsByMakeIdMapper;
  constructor(repository: IModelRepository, mapper: GetModelsByMakeIdMapper) {
    this._repository = repository;
    this._mapper = mapper;
  }

  async execute(makeId: string): Promise<GetModelsByMakeIdDto[]> {
    const data = await this._repository.getModelsByMakeId(makeId);
    const mappedData = data.map((x: IGetModelsByMakeId) => this._mapper.map(x));
    return mappedData;
  }
}
