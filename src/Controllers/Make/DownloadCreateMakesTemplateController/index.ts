import { Response, Request } from "express";

import { DownloadCreateMakesTemplateUseCase } from "../../../Presentation/Make/DownloadCreateMakesTemplateUsecase";

export class DownloadCreateMakesTemplateController {
  constructor(
    private _downloadCreateMakesTemplateUseCase: DownloadCreateMakesTemplateUseCase
  ) {}

  async handle(request: Request, response: Response) {
    this._downloadCreateMakesTemplateUseCase.execute(response);
  }
}
