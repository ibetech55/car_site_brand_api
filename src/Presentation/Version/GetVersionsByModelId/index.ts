import {
  GetVersionsByModelIdDto,
} from "../../../Data/Version/GetVersionDto";
import { Models } from "../../../Entities/models";
import { GetVersionsByModelIdMapper } from "../../../Mappers/Version/GetVersionsByModelId";
import { IVersionRepository } from "../../../Repositories/Version/IVersionRepository";

export class GetVersionsByModelIdUseCase {
  private _repository: IVersionRepository;
  private _mapper: GetVersionsByModelIdMapper;
  constructor(
    repository: IVersionRepository,
    mapper: GetVersionsByModelIdMapper
  ) {
    this._repository = repository;
    this._mapper = mapper;
  }

  async execute(modelId: string): Promise<GetVersionsByModelIdDto> {
    const data = await this._repository.getByModelId(modelId);
    const modelData: Models = data[0].models;
    const mappedData: GetVersionsByModelIdDto = this._mapper.map(
      data,
      modelData
    );
    return mappedData;
  }
}
