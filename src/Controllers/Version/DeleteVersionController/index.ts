import { Request, Response } from "express";
import { UpdateMakeUseCase } from "../../../Presentation/Make/UpdateMakeUseCase";
import { DeleteMakeUseCase } from "../../../Presentation/Make/DeleteMakeUseCase";
import { DeleteModelUseCase } from "../../../Presentation/Model/DeleteModelUseCase";
import { DeleteVersionUseCase } from "../../../Presentation/Version/DeleteVersionUseCase";

export class DeleteVersionController {
  private _deleteVersionUseCase: DeleteVersionUseCase;

  constructor(deleteVersionUseCase: DeleteVersionUseCase) {
    this._deleteVersionUseCase = deleteVersionUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._deleteVersionUseCase.execute(request.params.id);
    return response.status(200).json(data);
  }
}
