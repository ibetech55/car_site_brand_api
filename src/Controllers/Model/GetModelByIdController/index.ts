import { Request, Response } from "express";
import { GetModelByIdUseCase } from "../../../Presentation/Model/GetModelByIdUseCase";

export class GetModelByIdController {
  private _getModelByIdUseCase: GetModelByIdUseCase;

  constructor(getModelByIdUseCase: GetModelByIdUseCase) {
    this._getModelByIdUseCase = getModelByIdUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getModelByIdUseCase.execute(request.params.id);
    return response.status(200).json(data);
  }
}
