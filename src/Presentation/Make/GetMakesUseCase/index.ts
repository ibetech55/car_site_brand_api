import { Between, ILike } from "typeorm";
import { GetMakeDto, IGetMake } from "../../../Data/Make/GetMakeDto";
import {
  IMakeOrderBy,
  IMakePagination,
  MakePaginationDto,
} from "../../../Data/Make/MakePaginationDto";
import { GetMakeMapper } from "../../../Mappers/Make/GetMakeMapper";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";
import {
  GetPaginationDto,
  IGetData,
  IPagination,
} from "../../../Data/IPagination";
import { HandleQuery } from "../../../Utils/HandleQuery";
import { Makes } from "../../../Entities/makes";

export class GetMakesUseCase {
  private _repository: IMakeRepository;
  private _mapper: GetMakeMapper;
  private _handleQuery: HandleQuery;
  constructor(
    repository: IMakeRepository,
    mapper: GetMakeMapper,
    handleQuery: HandleQuery
  ) {
    this._repository = repository;
    this._mapper = mapper;
    this._handleQuery = handleQuery;
  }

  async execute(
    values: MakePaginationDto
  ): Promise<GetPaginationDto<GetMakeDto>> {
    const { take, skip } = this._handleQuery.handlePagination(
      values.page,
      values.limit
    );
    const query: IPagination<IMakePagination, IMakeOrderBy> = {
      where: {
        make_name: this._handleQuery.handleILike(values.makeName),
        created_at: this._handleQuery.handleBetweenDates(
          values.startDate,
          values.endDate
        ),
        origin: this._handleQuery.handleILike(values.origin),
        active: values?.active,
      },
      take,
      skip,
      order: {
        make_name: 'ASC',
        created_at: values?.orderBy?.createdAt,
        origin: values?.orderBy?.origin,
      },
    };
    const makesData: IGetData<Makes> = await this._repository.find(query);
    const mappedData: GetMakeDto[] = makesData.data.map((x: IGetMake) =>
      this._mapper.map(x)
    );
    return {
      data: mappedData,
      total: makesData.count,
      page: +values.page,
      limit: +values.limit,
    };
  }
}
