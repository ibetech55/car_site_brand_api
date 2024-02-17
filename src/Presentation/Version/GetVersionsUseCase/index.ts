import { GetPaginationDto, IGetData, IPagination } from "../../../Data/IPagination";
import { GetVersionDto } from "../../../Data/Version/GetVersionDto";
import { IVersionOrderBy, IVersionPagination, VersionPaginationDto } from "../../../Data/Version/VersionPaginationDto";
import { Versions } from "../../../Entities/versions";
import { GetVersionMapper } from "../../../Mappers/Version/GetVersionMapper";
import { IVersionRepository } from "../../../Repositories/Version/IVersionRepository";
import { HandleQuery } from "../../../Utils/HandleQuery";

export class GetVersionsUseCase {
  private _repository: IVersionRepository;
  private _handleQuery: HandleQuery;
  private _mapper: GetVersionMapper;

  constructor(repository: IVersionRepository, handleQuery: HandleQuery,  mapper: GetVersionMapper) {
    this._repository = repository;
    this._handleQuery = handleQuery;
    this._mapper = mapper;
  }

  async execute(values:VersionPaginationDto): Promise<GetPaginationDto<GetVersionDto>> {
    const {skip, take} = this._handleQuery.handlePagination(values?.page, values?.limit)
    const query: IPagination<IVersionPagination, IVersionOrderBy> = {
      where: {
        version_name: this._handleQuery.handleILike(values?.modelName),
        created_at:this._handleQuery.handleBetweenDates(values?.startDate, values?.endDate),
        models: { model_name: values?.modelName ? this._handleQuery.handleILike(values?.modelName): undefined, makes: {make_name: values?.makeName ? this._handleQuery.handleILike(values?.makeName) : undefined} },
        active: values?.active,
      },
      skip,
      take,
      order: {
        model_name: values?.orderBy?.modelName,
        models: {model_name: values?.orderBy?.modelName, makes:{make_name: values?.orderBy?.makeName}},
        active: values?.orderBy?.active,
        created_at: values?.orderBy?.createdAt
      },
    };
    const versionData:IGetData<Versions> = await this._repository.find(query);
    const mappedData: GetVersionDto[] = versionData.data.map((x) =>
      this._mapper.map(x)
    );
    return {
      data: mappedData,
      limit: +values?.limit,
      page: +values?.page,
      total: versionData.count
    };
  }
}
