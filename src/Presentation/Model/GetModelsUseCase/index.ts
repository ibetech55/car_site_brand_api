import { And, Equal, Or } from "typeorm";
import {
  GetPaginationDto,
  IGetData,
  IPagination,
} from "../../../Data/IPagination";
import { GetModelDto, IGetModel } from "../../../Data/Model/GetModelDtos";
import {
  IModelOrderBy,
  IModelPagination,
  ModelPaginationDto,
} from "../../../Data/Model/ModelPaginationDto";
import { Models } from "../../../Entities/models";
import { GetModelMapper } from "../../../Mappers/Model/GetModelMapper";
import { IModelRepository } from "../../../Repositories/Model/IModelRepository";
import { HandleQuery } from "../../../Utils/HandleQuery";

export class GetModelsUseCase {
  private _repository: IModelRepository;
  private _handleQuery: HandleQuery;
  private _mapper: GetModelMapper;
  constructor(
    repository: IModelRepository,
    handleQuery: HandleQuery,
    mapper: GetModelMapper
  ) {
    this._repository = repository;
    this._handleQuery = handleQuery;
    this._mapper = mapper;
  }

  async execute(
    values: ModelPaginationDto
  ): Promise<GetPaginationDto<GetModelDto>> {
    const { skip, take } = this._handleQuery.handlePagination(
      values.page,
      values.limit
    );

    const orderByFields = [
      { field: "model_name", key: "modelName" },
      { field: "makes", key: "makes", field2: "make_name" },
      { field: "origin", key: "origin" },
      { field: "created_at", key: "createdAt" },
      { field: "active", key: "status" },
      { field: "year_founded", key: "yearFounded" },
    ];
    const query: IPagination<IModelPagination, IModelOrderBy> = {
      where: {
        body_type: values.bodyType ? this._handleQuery.handleOR(values.bodyType) : undefined,
        model_name: this._handleQuery.handleILike(values?.modelName),
        created_at: this._handleQuery.handleBetweenDates(
          values?.startDate,
          values.endDate
        ),
        makes: {
          make_name: values?.makeName
            ? this._handleQuery.handleILike(values?.makeName)
            : undefined,
        },
        active: values?.active,
      },
      skip,
      take,
      order: this._handleQuery.handleOrderBy(values.orderBy, orderByFields),
    };
    const modelData: IGetData<Models> = await this._repository.find(query);
    const mappedData: GetModelDto[] = modelData.data.map((x: IGetModel) =>
      this._mapper.map(x)
    );
    return {
      data: mappedData,
      total: modelData.count,
      limit: +values.limit,
      page: +values.page,
    };
  }
}
