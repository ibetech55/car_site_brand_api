import { Request, Response } from "express";
import { GetModelsByMakeIdUseCase } from "../../../Presentation/Model/GetModelsByMakeId";

export class GetModelsByMakeIdController {
  private _getModelsByMakeIdUseCase: GetModelsByMakeIdUseCase;

  constructor(getModelsByMakeIdUseCase: GetModelsByMakeIdUseCase) {
    this._getModelsByMakeIdUseCase = getModelsByMakeIdUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getModelsByMakeIdUseCase.execute(request.params.makeId);
    return response.status(200).json(data);
  }
}
