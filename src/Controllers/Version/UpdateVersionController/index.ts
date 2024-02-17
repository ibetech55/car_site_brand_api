import { Request, Response } from "express";
import { UpdateVersionUseCase } from "../../../Presentation/Version/UpdateVersionUseCase";

export class UpdateVersionController {
  private _updateVersionUseCase: UpdateVersionUseCase;

  constructor(updateVersionUseCase: UpdateVersionUseCase) {
    this._updateVersionUseCase = updateVersionUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._updateVersionUseCase.execute(request.params.id, request.body);
    return response.status(200).json(data);
  }
}
