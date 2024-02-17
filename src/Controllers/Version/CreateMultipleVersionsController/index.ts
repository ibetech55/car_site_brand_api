import { Request, Response } from "express";
import { CreateVersionUseCase } from "../../../Presentation/Version/CreateVersionUseCase";
import { CreateMultipleVersionsUseCase } from "../../../Presentation/Version/CreateMultipleVersionUseCase";

export class CreateMultipleVersionsController {
  private _createMultipleVersionUseCase: CreateMultipleVersionsUseCase;
  constructor(createVersionUseCase: CreateMultipleVersionsUseCase) {
    this._createMultipleVersionUseCase = createVersionUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._createMultipleVersionUseCase.execute(request.files);
    return response.status(201).json(data)
  }
}
