import { ExportMakesSpreadsheetController } from "../../Controllers/Make/ExportMakesSpreadsheetController";
import { ExportMakesSpreadsheetUsecase } from "../../Presentation/Make/ExportMakesSpreadsheetUseCase";
import { MakeRepository } from "../../Repositories/Make/make.repository";
import { HandleExportData } from "../../Utils/HandleExportData";
import { HandleQuery } from "../../Utils/HandleQuery";

const makeRepository = new MakeRepository();
const handleQuery = new HandleQuery();
const handleExportData = new HandleExportData();
const exportMakesSpreadsheetUseCase = new ExportMakesSpreadsheetUsecase(
  makeRepository,
  handleQuery,
  handleExportData
);
const exportMakesSpreadsheetController = new ExportMakesSpreadsheetController(
  exportMakesSpreadsheetUseCase
);

export { exportMakesSpreadsheetController, exportMakesSpreadsheetUseCase };
