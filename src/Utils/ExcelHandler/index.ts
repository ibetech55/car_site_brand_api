import ExcelJS from "exceljs";
import { UploadedFile } from "express-fileupload";

export class ExcelHandler {
  constructor() {}

  async uploadFile<T>(fileData: UploadedFile): Promise<{data:T[], columns:string[]}> {
    const workbook = new ExcelJS.Workbook();
    const columnNames = [];
    const data = [];
    await workbook.xlsx.load(fileData.data).then((workbook) => {
      const worksheet = workbook.getWorksheet(1);

      // Get the first row (assuming it contains the column names)
      const headerRow = worksheet.getRow(1);

      // Extract column names
      headerRow.eachCell((cell) => {
        columnNames.push(cell.value);
      });

      for (let rowNum = 2; rowNum <= worksheet.rowCount; rowNum++) {
        const row = worksheet.getRow(rowNum);
        const rowData = {};

        headerRow.eachCell((headerCell, colNum) => {
          const columnName = columnNames[colNum - 1];
          rowData[columnName] = row.getCell(colNum).value;
        });

        data.push(rowData);
      }
    });

    return {data, columns:columnNames};
  }
}
