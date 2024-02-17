import { GetVersionDto } from "../../../Data/Version/GetVersionDto";
import { Versions } from "../../../Entities/versions";
import { GetVersionMapper } from "../../../Mappers/Version/GetVersionMapper";
import { IVersionRepository } from "../../../Repositories/Version/IVersionRepository";

export class GetVersionByIdUseCase {
  private _repository: IVersionRepository;
  private _mapper: GetVersionMapper;
  constructor(repository: IVersionRepository, mapper: GetVersionMapper) {
    this._repository = repository;
    this._mapper = mapper;
  }

  async execute(id: string): Promise<GetVersionDto> {
    const data: Versions = await this._repository.getById(id);
    const mappedData: GetVersionDto = this._mapper.map(data);
    return mappedData;
  }
}
