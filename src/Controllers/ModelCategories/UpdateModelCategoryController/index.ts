import { Request, Response } from "express";
import { UpdateModelCategoryUseCase } from "../../../Presentation/ModelCategory/UpdateModelCategoryUsecase";

export class UpdateModelCategoryController {
  constructor( private _updateModelCategoryUseCase: UpdateModelCategoryUseCase) {
  }

  async handle(request: Request, response: Response) {
    const data = await this._updateModelCategoryUseCase.execute(request.params.id, request.body);
    return response.status(200).json(data);
  }
}
