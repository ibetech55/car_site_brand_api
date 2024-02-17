import { Request, Response } from "express";
import { CreateVersionUseCase } from "../../../Presentation/Version/CreateVersionUseCase";
import { GetVersionsUseCase } from "../../../Presentation/Version/GetVersionsUseCase";
import { GetVersionsByModelIdUseCase } from "../../../Presentation/Version/GetVersionsByModelId";

export class GetVersionsByModelIdController {
  private _getVersionsByModelIdUseCase: GetVersionsByModelIdUseCase;
  constructor(getVersionsByModelIdUseCase: GetVersionsByModelIdUseCase) {
    this._getVersionsByModelIdUseCase = getVersionsByModelIdUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getVersionsByModelIdUseCase.execute(request.params.modelId);
    return response.status(200).json(data)
  }
}
