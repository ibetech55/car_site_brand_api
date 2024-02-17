import { Request, Response } from "express";
import { GetMakesUseCase } from "../../../Presentation/Make/GetMakesUseCase";

export class GetMakesController {
  private _getMakesUseCase: GetMakesUseCase;

  constructor(getMakesUseCase: GetMakesUseCase) {
    this._getMakesUseCase = getMakesUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getMakesUseCase.execute(request.query);
    return response.status(200).json(data);
  }
}
