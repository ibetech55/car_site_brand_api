import { Request, Response } from "express";
import { CreateVersionUseCase } from "../../../Presentation/Version/CreateVersionUseCase";

export class CreateVersionController {
  private _createVersionUseCase: CreateVersionUseCase;
  constructor(createVersionUseCase: CreateVersionUseCase) {
    this._createVersionUseCase = createVersionUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._createVersionUseCase.execute(request.body);
    return response.status(201).json(data)
  }
}
