import excelJs from "exceljs";
import { Response } from "express";

export class DownloadCreateMakesTemplateUseCase {
  constructor() {}

  async execute(res: Response) {
    const workbook = new excelJs.Workbook();
    const worksheet = workbook.addWorksheet("CreateMakesTemplate");

    worksheet.columns = [
      { header: "make_name", key: "make_name" },
      { header: "origin", key: "origin" },
    ];

    res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      );
      res.setHeader(
        'Content-Disposition',
        'attachment; filename=' + 'CreateMakesTemplate.xlsx'
      );

    await workbook.xlsx.write(res);
    res.end();
  }
}
