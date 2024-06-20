import { Response, Request } from "express";

import { DownloadCreateModelsTemplateUseCase } from "../../../Presentation/Model/DownloadCreateModelTemplateUseCase";

export class DownloadCreateModelsTemplateController {
  constructor(
    private _downloadCreateModelsTemplateUseCase: DownloadCreateModelsTemplateUseCase
  ) {}

  async handle(request: Request, response: Response) {
    this._downloadCreateModelsTemplateUseCase.execute(response);
  }
}
