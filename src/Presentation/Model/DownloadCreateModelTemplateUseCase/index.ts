import excelJs from "exceljs";
import { Response } from "express";

export class DownloadCreateModelsTemplateUseCase {
  constructor() {}

  async execute(res: Response) {
    const workbook = new excelJs.Workbook();
    const worksheet = workbook.addWorksheet("CreateModelsTemplate");

    worksheet.columns = [
      { header: "model_name", key: "model_name", width: 10 },
      { header: "make_name", key: "make_name", width: 10 },
      { header: "model_category", key: "model_category", width: 10 },
    ];

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "CreateModelsTemplate.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  }
}
