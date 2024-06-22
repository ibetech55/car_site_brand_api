import excelJs from "exceljs";
import { Response } from "express";

export class DownloadCreateMakesTemplateUseCase {
  constructor() {}

  async execute(res: Response) {
    const workbook = new excelJs.Workbook();
    const worksheet = workbook.addWorksheet("CreateMakesTemplate");

    worksheet.columns = [
      { header: "make_name", key: "make_name", width:25 },
      { header: "origin", key: "origin", width:25  },
      { header: "company", key: "company", width:25  },
      { header: "year_founded", key: "year_founded", width:25  },
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
