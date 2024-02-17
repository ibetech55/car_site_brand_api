import { Request, Response } from "express";
import { CreateMakeUseCase } from "../../../Presentation/Make/CreateMakeUseCase";
export class CreateMakeController {
  private _createMakeUseCase: CreateMakeUseCase;
  constructor(createMakeUseCase: CreateMakeUseCase) {
    this._createMakeUseCase = createMakeUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._createMakeUseCase.execute(
      request.body,
      request.files
    );
    return response.status(201).json(data);
  }
}
