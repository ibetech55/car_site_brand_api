import { Request, Response } from "express";
import { CreateMakeUseCase } from "../../../Presentation/Make/CreateMakeUseCase";
import { FileArray, UploadedFile } from "express-fileupload";
import { CreateMakeDto } from "../../../Data/Make/CreateMakeDto";
export class CreateMakeController {
  private _createMakeUseCase: CreateMakeUseCase;
  constructor(createMakeUseCase: CreateMakeUseCase) {
    this._createMakeUseCase = createMakeUseCase;
  }

  async handle(request: Request, response: Response) {
    let files: UploadedFile[] = [];

    if(request.files){
      if (!Array.isArray(request.files.makeImage)) {
        const image = request.files as FileArray;
        const makeImage = image.makeImage as UploadedFile;
        files.push(makeImage);
      } else {
        const image = request.files as FileArray;
        const makeImage = image.makeImage as UploadedFile[];
        files = [...makeImage];
      }
    }

    const data = await this._createMakeUseCase.execute(JSON.parse(request.body.data), files);
    return response.status(201).json(data);
  }
}
