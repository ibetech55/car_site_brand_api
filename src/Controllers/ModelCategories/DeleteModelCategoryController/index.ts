import { Request, Response } from "express";
import { DeleteModelCategoryUseCase } from "../../../Presentation/ModelCategory/DeleteModelCategoryUsecase";

export class DeleteModelCategoryController {
  constructor( private _deleteModelCategoryUseCase: DeleteModelCategoryUseCase) {
  }

  async handle(request: Request, response: Response) {
    const data = await this._deleteModelCategoryUseCase.execute(request.params.id);
    return response.status(200).json(data);
  }
}
