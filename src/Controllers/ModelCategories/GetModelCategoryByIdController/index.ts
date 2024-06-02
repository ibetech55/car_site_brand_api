import { Request, Response } from "express";
import { GetModelCategoryByIdUseCase } from "../../../Presentation/ModelCategory/GetModelCategoryByIdUseCase";
export class GetModelCategoryByIdController {
  constructor(
    private _getModelCategoryByIdUseCase: GetModelCategoryByIdUseCase
  ) {}
  async handle(request: Request, response: Response) {
    const data = await this._getModelCategoryByIdUseCase.execute(
      request.params.id
    );
    return response.status(200).json(data);
  }
}
