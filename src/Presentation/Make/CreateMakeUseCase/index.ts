import { FileArray, UploadedFile } from "express-fileupload";
import { CreateMakeDto } from "../../../Data/Make/CreateMakeDto";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";
import { FileHandler } from "../../../Utils/FileHandler";
import { AppError } from "../../../ErrorHandler/AppError";

export class CreateMakeUseCase {
  private _makeRepository: IMakeRepository;
  private _fileHandler: FileHandler;

  constructor(makeRepository: IMakeRepository, fileHandler: FileHandler) {
    this._makeRepository = makeRepository;
    this._fileHandler = fileHandler;
  }

  async execute(values: CreateMakeDto, file: FileArray) {
    const make = await this._makeRepository.getByMakeName(values.makeName);
    if (make) {
      throw new AppError("Car Already exists", 400);
    }
    let makeImage: UploadedFile;
    let imageName: string;
    if (file) {
      makeImage = file.makeImage as UploadedFile;
      imageName = this._fileHandler.getFileName(
        makeImage.mimetype.split("/")[1]
      );
    }

    const makeData = await this._makeRepository.create({
      make_name: values.makeName,
      origin: values.origin,
      make_logo: imageName,
      active: false,
    });

    if (file) {
      await this._fileHandler.postFiles(makeImage.data, imageName);
    }

    return makeData;
  }
}
