import { Request, Response } from "express";
import { UpdateMakeUseCase } from "../../../Presentation/Make/UpdateMakeUseCase";
import { DeleteMakeUseCase } from "../../../Presentation/Make/DeleteMakeUseCase";

export class DeleteMakeController {
  private _deleteMakeUseCase: DeleteMakeUseCase;

  constructor(deleteMakeUseCase: DeleteMakeUseCase) {
    this._deleteMakeUseCase = deleteMakeUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._deleteMakeUseCase.execute(request.params.id);
    return response.status(200).json(data);
  }
}
