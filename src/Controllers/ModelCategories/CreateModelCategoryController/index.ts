import { Request, Response } from "express";
import { CreateModelCategoryUseCase } from "../../../Presentation/ModelCategory/CreateModelCategoryUseCase";

export class CreateModelCategoryController {
  private _createModelCatgeoryUseCase: CreateModelCategoryUseCase;

  constructor(createModelCatgeoryUseCase: CreateModelCategoryUseCase) {
    this._createModelCatgeoryUseCase = createModelCatgeoryUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._createModelCatgeoryUseCase.execute(request.body);
    return response.status(200).json(data);
  }
}
