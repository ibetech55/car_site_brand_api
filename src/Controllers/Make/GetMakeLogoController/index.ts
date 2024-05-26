import { Request, Response } from "express";
import { GetMakeLogoUseCase } from "../../../Presentation/Make/GetMakeLogoUseCase";

export class GetMakeLogoController {
  
    constructor(private _getMakeLogoUseCase:GetMakeLogoUseCase) {
    }
  
    async handle(request: Request, response: Response) {
      const data = await this._getMakeLogoUseCase.execute(request.params.id);
      return response.status(200).json(data);
    }
}