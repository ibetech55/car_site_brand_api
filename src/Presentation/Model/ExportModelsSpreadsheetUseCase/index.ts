import { Response } from "express";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";
import {
  IMakeOrderBy,
  IMakePagination,
  MakePaginationDto,
} from "../../../Data/Make/MakePaginationDto";
import { IGetData, IPagination } from "../../../Data/IPagination";
import { HandleQuery } from "../../../Utils/HandleQuery";
import { HandleExportData } from "../../../Utils/HandleExportData";
import { Models } from "../../../Entities/models";
import { IModelOrderBy, IModelPagination, ModelPaginationDto } from "../../../Data/Model/ModelPaginationDto";
import { IModelRepository } from "../../../Repositories/Model/IModelRepository";

export class ExportModelsSpreadsheetUsecase {
  constructor(
    private _modelRepository: IModelRepository,
    private _handleQuery: HandleQuery,
    private _handleExportData: HandleExportData
  ) {}

  private spreadSheetName = "ExportModelsSpreadsheet";
  async execute(
    res: Response,
    exportType: string,
    columns: { key: string }[],
    queryValues: ModelPaginationDto
  ) {
    const columnsFields = [
      { field: "model_name", key: "modelName", order: 1, header: "Model Name" },
      {
        field: "makes",
        field2: "make_name",
        key: "makes",
        order: 2,
        header: "Make",
      },
      { field: "active", key: "active", order: 4, header: "Status" },
      {
        field: "year_founded",
        key: "yearFounded",
        order: 3,
        header: "Year Founded",
      },
      {
        field: "updated_at",
        key: "updatedAt",
        order: 7,
        header: "Updated At",
      },
      {
        field: "created_at",
        key: "createdAt",
        order: 6,
        header: "Created At",
      },
      {
        field: "body_type",
        key: "bodyType",
        order: 5,
        header: "Body Type",
      }
    ];


    const orderByFields = [
      { field: "model_name", key: "modelName" },
      { field: "makes", key: "makes", field2: "make_name" },
      { field: "origin", key: "origin" },
      { field: "created_at", key: "createdAt" },
      { field: "active", key: "status" },
    ];

    const { take, skip } = this._handleQuery.handlePagination(
      queryValues.page,
      queryValues.limit
    );

    const query: IPagination<IModelPagination, IModelOrderBy> = {
      where: {
        body_type: queryValues.bodyType ? this._handleQuery.handleOR(queryValues.bodyType) : undefined,
        model_name: this._handleQuery.handleILike(queryValues?.modelName),
        created_at: this._handleQuery.handleBetweenDates(
          queryValues?.startDate,
          queryValues.endDate
        ),
        makes: {
          make_name: queryValues?.makeName
            ? this._handleQuery.handleILike(queryValues?.makeName)
            : undefined,
        },
        active: queryValues?.active,
      },
      take: exportType === "paginate" ? take : undefined,
      skip: exportType === "paginate" ? skip : undefined,
      order: this._handleQuery.handleOrderBy(queryValues.orderBy, orderByFields),
    };

    const selectCols = this._handleExportData.getColumns(
      columns,
      columnsFields
    );
    const modelData = await this._modelRepository.export(selectCols, query);
    await this._handleExportData.execute({
      data: modelData.data,
      columns: columns,
      columnsFields,
      workSheetName: this.spreadSheetName,
      response: res,
      fileName: this.spreadSheetName,
    });
  }
}
