import { Request, Response } from "express";
import { GetVersionByIdUseCase } from "../../../Presentation/Version/GetVersionByIdUseCase";

export class GetVersionByIdController {
  private _getVersionByIdUseCase: GetVersionByIdUseCase;
  constructor(getVersionByIdUseCase: GetVersionByIdUseCase) {
    this._getVersionByIdUseCase = getVersionByIdUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getVersionByIdUseCase.execute(request.params.id);
    return response.status(200).json(data)
  }
}
