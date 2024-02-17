import { Request, Response } from "express";
import { GetMakeByIdUseCase } from "../../../Presentation/Make/GetMakebyIdUseCase";

export class GetMakeByIdController {
  private _getMakeByIdUseCase: GetMakeByIdUseCase;

  constructor(getMakeByIdUseCase: GetMakeByIdUseCase) {
    this._getMakeByIdUseCase = getMakeByIdUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getMakeByIdUseCase.execute(request.params.id);
    return response.status(200).json(data);
  }
}
