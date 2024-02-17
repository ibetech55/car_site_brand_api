import { FileArray, UploadedFile } from "express-fileupload";
import { AppError } from "../../../ErrorHandler/AppError";
import { FileHandler } from "../../../Utils/FileHandler";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";
import { IUpdateMake, UpdateMakeDto } from "../../../Data/Make/UpdateMakeDto";

export class ChangeMakeLogoUseCase {
  private _repository: IMakeRepository;
  private _fileHandler: FileHandler;
  constructor(repository: IMakeRepository, fileHandler: FileHandler) {
    this._repository = repository;
    this._fileHandler = fileHandler;
  }

  async execute(id: string, file?: FileArray): Promise<Boolean> {
    const makeData = await this._repository.getById(id);

    if (!makeData) {
      throw new AppError("No make found", 404);
    }
    let data: Boolean;
    if (!file) {
      data = await this._repository.updateMake(id, { make_logo: null });
    } else {
      const makeImage = file.makeImage as UploadedFile;
      const imageName = this._fileHandler.getFileName(
        makeImage.mimetype.split("/")[1]
      );
      await this._fileHandler.postFiles(makeImage.data, imageName);
      data = await this._repository.updateMake(id, { make_logo: imageName });
    }

    return data;
  }
}
