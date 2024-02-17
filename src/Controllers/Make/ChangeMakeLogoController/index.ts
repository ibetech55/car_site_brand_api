import { Request, Response } from "express";
import { ChangeMakeLogoUseCase } from "../../../Presentation/Make/ChangeMakeLogoUseCase";

export class ChangeMakeLogoController {
  private _changeMakeLogoUseCase: ChangeMakeLogoUseCase;
  constructor(changeMakeLogoUseCase: ChangeMakeLogoUseCase) {
    this._changeMakeLogoUseCase = changeMakeLogoUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._changeMakeLogoUseCase.execute(
      request.params.id,
      request.files
    );
    return response.status(200).json(data);
  }
}
