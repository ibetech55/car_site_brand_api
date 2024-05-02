import { Request, Response } from "express";
import { VerifyMakeUseCase } from "../../../Presentation/Make/VerifyMakeUseCase";

export class VerifyMakeController {
  private _verifyMakeUseCase: VerifyMakeUseCase;
  constructor(verifyMakeUseCase: VerifyMakeUseCase) {
    this._verifyMakeUseCase = verifyMakeUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._verifyMakeUseCase.execute(request.body.ids, request.params.type);
    return response.status(200).json(data);
  }
}
