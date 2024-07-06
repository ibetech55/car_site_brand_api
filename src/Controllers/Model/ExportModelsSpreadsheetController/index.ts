import { Response, Request } from "express";
import { ExportModelsSpreadsheetUsecase } from "../../../Presentation/Model/ExportModelsSpreadsheetUseCase";

export class ExportModelsSpreadsheetController {
  constructor(
    private _exportModelsSpreadsheetUseCase: ExportModelsSpreadsheetUsecase
  ) {}

  async handle(request: Request, response: Response) {
   await this._exportModelsSpreadsheetUseCase.execute(
      response,
      request.params.exportType,
      request.body.columns,
      request.query
    );
  }
}
