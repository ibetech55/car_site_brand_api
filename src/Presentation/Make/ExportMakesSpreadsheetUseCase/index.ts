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
import { Makes } from "../../../Entities/makes";

export class ExportMakesSpreadsheetUsecase {
  constructor(
    private _makeRepository: IMakeRepository,
    private _handleQuery: HandleQuery,
    private _handleExportData: HandleExportData
  ) {}

  private spreadSheetName = "ExportMakesSpreadsheet";
  async execute(
    res: Response,
    exportType: string,
    columns: { key: string }[],
    queryValues: MakePaginationDto
  ) {
    const columnsFields = [
      { field: "make_name", key: "makeName", order: 1, header: "Make Name" },
      { field: "origin", key: "origin", order: 2, header: "Origin" },
      {
        field: "created_at",
        key: "createdAt",
        order: 6,
        header: "Created At",
      },
      { field: "active", key: "active", order: 4, header: "Active" },
      { field: "company", key: "company", order: 3, header: "Company" },
      {
        field: "year_founded",
        key: "yearFounded",
        order: 5,
        header: "Year Founded",
      },
      {
        field: "updated_at",
        key: "updatedAt",
        order: 7,
        header: "Updated At",
      },
    ];
    const orderByFields = [
      { field: "make_name", key: "makeName" },
      { field: "origin", key: "origin" },
      { field: "created_at", key: "createdAt" },
      { field: "active", key: "active" },
    ];

    const { take, skip } = this._handleQuery.handlePagination(
      queryValues.page,
      queryValues.limit
    );

    const query: IPagination<IMakePagination, IMakeOrderBy> = {
      where: {
        make_name: this._handleQuery.handleILike(queryValues.makeName),
        created_at: this._handleQuery.handleBetweenDates(
          queryValues.startDate,
          queryValues.endDate
        ),
        origin: this._handleQuery.handleILike(queryValues.origin),
        active: queryValues?.active,
      },
      take: exportType === "paginate" ? take : undefined,
      skip: exportType === "paginate" ? skip : undefined,
      order: this._handleQuery.handleOrderBy(
        queryValues.orderBy,
        orderByFields
      ),
    };

    const selectCols = this._handleExportData.getColumns(
      columns,
      columnsFields
    );
    const makesdata = await this._makeRepository.export(selectCols, query);
    await this._handleExportData.execute({
      data: makesdata.data,
      columns: columns,
      columnsFields,
      workSheetName: this.spreadSheetName,
      response: res,
      fileName: this.spreadSheetName,
    });
  }
}
