import { Request, Response } from "express";
import { UpdateMakeUseCase } from "../../../Presentation/Make/UpdateMakeUseCase";
import { DeleteMakeUseCase } from "../../../Presentation/Make/DeleteMakeUseCase";
import { DeleteModelUseCase } from "../../../Presentation/Model/DeleteModelUseCase";

export class DeleteModelController {
  private _deleteModelUseCase: DeleteModelUseCase;

  constructor(deleteModelUseCase: DeleteModelUseCase) {
    this._deleteModelUseCase = deleteModelUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._deleteModelUseCase.execute(request.params.id);
    return response.status(200).json(data);
  }
}
