import { Request, Response } from "express";
import { VerifyModelsUseCase } from "../../../Presentation/Model/VerifyModelsUseCase";

export class VerifyModelsController {
  private _verifyModelsUseCase: VerifyModelsUseCase;
  constructor(verifyModelsUseCase: VerifyModelsUseCase) {
    this._verifyModelsUseCase = verifyModelsUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._verifyModelsUseCase.execute(request.body.ids);
    return response.status(200).json(data);
  }
}
