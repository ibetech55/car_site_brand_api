import { Response, Request } from "express";
import { ExportMakesSpreadsheetUsecase } from "../../../Presentation/Make/ExportMakesSpreadsheetUseCase";

export class ExportMakesSpreadsheetController {
  constructor(
    private _exportMakesSpreadsheetUseCase: ExportMakesSpreadsheetUsecase
  ) {}

  async handle(request: Request, response: Response) {
   await this._exportMakesSpreadsheetUseCase.execute(
      response,
      request.params.exportType,
      request.body.columns,
      request.query
    );
  }
}
