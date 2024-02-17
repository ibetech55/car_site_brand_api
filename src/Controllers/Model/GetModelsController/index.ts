import { Request, Response } from "express";
import { GetModelsUseCase } from "../../../Presentation/Model/GetModelsUseCase";

export class GetModelsController {
  private _getModelsUseCase: GetModelsUseCase;

  constructor(getModelsUseCase: GetModelsUseCase) {
    this._getModelsUseCase = getModelsUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getModelsUseCase.execute(request.query);
    return response.status(200).json(data);
  }
}
