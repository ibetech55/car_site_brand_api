import { Request, Response } from "express";
import { GetVersionByIdUseCase } from "../../../Presentation/Version/GetVersionByIdUseCase";
import { VerifyVersionsUseCase } from "../../../Presentation/Version/VerifyVersionsUseCase";

export class VerifyVersionsController {
  private _verifyVersionsUseCase: VerifyVersionsUseCase;
  constructor(verifyVersionsUseCase: VerifyVersionsUseCase) {
    this._verifyVersionsUseCase = verifyVersionsUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._verifyVersionsUseCase.execute(request.body.ids);
    return response.status(200).json(data)
  }
}
