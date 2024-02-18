import { Request, Response } from "express";
import { CreateVersionUseCase } from "../../../Presentation/Version/CreateVersionUseCase";
import { GetVersionsUseCase } from "../../../Presentation/Version/GetVersionsUseCase";

export class GetVersionsController {
  private _getVersionsUseCase: GetVersionsUseCase;
  constructor(getVersionsUseCase: GetVersionsUseCase) {
    this._getVersionsUseCase = getVersionsUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getVersionsUseCase.execute(request.query);
    return response.status(200).json(data)
  }
}
