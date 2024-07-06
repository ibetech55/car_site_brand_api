import { ExportModelsSpreadsheetController } from "../../Controllers/Model/ExportModelsSpreadsheetController";
import { ExportModelsSpreadsheetUsecase } from "../../Presentation/Model/ExportModelsSpreadsheetUseCase";
import { ModelRepository } from "../../Repositories/Model/model.repository";
import { HandleExportData } from "../../Utils/HandleExportData";
import { HandleQuery } from "../../Utils/HandleQuery";

const modelRepository = new ModelRepository();
const handleQuery = new HandleQuery();
const handleExportData = new HandleExportData();
const exportModelsSpreadsheetUseCase = new ExportModelsSpreadsheetUsecase(
  modelRepository,
  handleQuery,
  handleExportData
);
const exportModelsSpreadsheetController = new ExportModelsSpreadsheetController(
  exportModelsSpreadsheetUseCase
);

export { exportModelsSpreadsheetController, exportModelsSpreadsheetUseCase };
