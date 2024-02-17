import { Request, Response } from "express";
import { CreateMultipleModelsUseCase } from "../../../Presentation/Model/CreateMultipleModelsUseCase";

export class CreateMultipleModelsController {
    private _createMultipleModelsUseCase: CreateMultipleModelsUseCase;

    constructor(createMultipleModelsUseCase: CreateMultipleModelsUseCase) {
        this._createMultipleModelsUseCase = createMultipleModelsUseCase
    }

    async handle(request: Request, response: Response){
        const data = await this._createMultipleModelsUseCase.execute(
            request.files
          );
          return response.status(201).json(data);
    }
}