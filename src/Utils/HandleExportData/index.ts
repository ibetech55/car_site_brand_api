import excelJs, { Workbook } from "exceljs";
import { Response } from "express";

export interface IColumns {
  key: string;
}

export interface IColumnsField {
  key: string;
  field: string;
  order: number;
  header: string;
}
export class HandleExportData {
  async execute<T>(params: {
    data: T[];
    columns: IColumns[];
    columnsFields: IColumnsField[];
    workSheetName: string;
    response: Response;
    fileName: string;
  }) {
    const { data, columns, columnsFields, workSheetName, response, fileName } =
      params;
    const workbook = new excelJs.Workbook();
    const worksheet = workbook.addWorksheet(workSheetName);
    const workSheetCols = [];
    const workSheetRows = [];
    const dbFields = [];
    columns.map((col) => {
      if (columnsFields.some((cf) => cf.key === col.key)) {
        const field = columnsFields.find((cf2) => cf2.key === col.key);
        workSheetCols.push({
          header: field.header,
          key: field.field,
          width: 25,
          order: field.order,
        });
        dbFields.push(field);
      }
    });
    data.forEach((md) => {
      const obj = {};
      dbFields.forEach((dsc) => {
        if(!dsc.hasOwnProperty('field2')){
          if(typeof md[dsc.field] === 'boolean'){
            obj[dsc.field] = md[dsc.field].toString();
          } else {  
            obj[dsc.field] = md[dsc.field];
          }
        } else {
          if(typeof md[dsc.field][dsc.field2] === 'boolean'){
            obj[dsc.field] = md[dsc.field][dsc.field2].toString();
          } else {
            obj[dsc.field] = md[dsc.field][dsc.field2];
          }
        }
   
      });
      workSheetRows.push(obj);
    });

    worksheet.columns = workSheetCols.sort((a, b) => a.order - b.order);
    worksheet.addRows(workSheetRows);

    response.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    response.setHeader(
      "Content-Disposition",
      `attachment; filename=${fileName}.xlsx`
    );

    await workbook.xlsx.write(response);
  }

  getColumns(columns: IColumns[], columnsFields: IColumnsField[]) {
    const databaseSelectCols = [];
    const selectQuery = {};
    columns.map((col) => {
      if (columnsFields.some((cf) => cf.key === col.key)) {
        const field = columnsFields.find((f) => f.key === col.key);
        databaseSelectCols.push(field);
      }
    });
    const dsc = databaseSelectCols.sort((a, b) => a.order - b.order);
    dsc.forEach((x) => {
      if (!x.hasOwnProperty("field2")) {
        selectQuery[x.field] = true;
      } else {
        selectQuery[x.field] = { [x.field2]: true };
      }
    });
    return selectQuery;
  }
}
