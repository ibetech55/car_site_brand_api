import { Request, Response } from "express";
import { GetModelCategoriesListUseCase } from "../../../Presentation/ModelCategory/GetModelCategoriesListUseCase";

export class GetModelCategoriesListController {
  private _getModelCatgeoriesListUseCase: GetModelCategoriesListUseCase;

  constructor(getModelCatgeoriesListUseCase: GetModelCategoriesListUseCase) {
    this._getModelCatgeoriesListUseCase = getModelCatgeoriesListUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getModelCatgeoriesListUseCase.execute();
    return response.status(200).json(data);
  }
}
