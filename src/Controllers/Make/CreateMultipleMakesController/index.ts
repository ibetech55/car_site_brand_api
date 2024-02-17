import { Request, Response } from "express";
import { CreateMultipleMakesUseCase } from "../../../Presentation/Make/CreateMultipleMakesUseCase";

export class CreateMultipleMakesController {
    private _createMultipleMakesUseCase: CreateMultipleMakesUseCase;

    constructor(createMultipleMakesUseCase: CreateMultipleMakesUseCase) {
        this._createMultipleMakesUseCase = createMultipleMakesUseCase
    }

    async handle(request: Request, response: Response){
        const data = await this._createMultipleMakesUseCase.execute(
            request.files
          );
          return response.status(201).json(data);
    }
}