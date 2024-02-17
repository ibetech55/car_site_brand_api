import { Request, Response } from "express";
import { CreateModelUseCase } from "../../../Presentation/Model/CreateModelUseCase";
export class CreateModelController {
  private _createModelUseCase: CreateModelUseCase;
  constructor(createModelUseCase: CreateModelUseCase) {
    this._createModelUseCase = createModelUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._createModelUseCase.execute(request.body);
    return response.status(201).json(data);
  }
}
