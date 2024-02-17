import { Request, Response } from "express";
import { GetCarListUseCase } from "../../../Presentation/Make/GetCarListUseCase";

export class GetCarListController {
  private _getCarListUseCase: GetCarListUseCase;

  constructor(getCarListUseCase: GetCarListUseCase) {
    this._getCarListUseCase = getCarListUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getCarListUseCase.execute();
    return response.status(200).json(data);
  }
}
