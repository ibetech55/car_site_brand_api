import { Request, Response } from "express";
import { UpdateMakeUseCase } from "../../../Presentation/Make/UpdateMakeUseCase";
import { UpdateModelUseCase } from "../../../Presentation/Model/UpdateModelUseCase";

export class UpdateModelController {
  private _updateModelUseCase: UpdateModelUseCase;

  constructor(updateModelUseCase: UpdateModelUseCase) {
    this._updateModelUseCase = updateModelUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._updateModelUseCase.execute(request.params.id, request.body);
    return response.status(200).json(data);
  }
}
