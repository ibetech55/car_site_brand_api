import { Request, Response } from "express";
import { GetModelByIdUseCase } from "../../../Presentation/Model/GetModelByIdUseCase";
import { GetModelCategoriesUseCase } from "../../../Presentation/ModelCategory/GetModelCategoriesUseCase";

export class GetModelCategoriesController {
  private _getModelCatgeoriesUseCase: GetModelCategoriesUseCase;

  constructor(getModelCatgeoriesUseCase: GetModelCategoriesUseCase) {
    this._getModelCatgeoriesUseCase = getModelCatgeoriesUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getModelCatgeoriesUseCase.execute();
    return response.status(200).json(data);
  }
}
