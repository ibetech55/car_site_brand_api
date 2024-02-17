import { Request, Response } from "express";
import { UpdateMakeUseCase } from "../../../Presentation/Make/UpdateMakeUseCase";

export class UpdateMakeController {
  private _updateMakeUseCase: UpdateMakeUseCase;

  constructor(updateMakeUseCase: UpdateMakeUseCase) {
    this._updateMakeUseCase = updateMakeUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._updateMakeUseCase.execute(request.params.id, request.body);
    return response.status(200).json(data);
  }
}
