import { FileArray, UploadedFile } from "express-fileupload";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";
import { IMakeExcelDto } from "../../../Data/Make/CreateMakeDto";
import { ExcelHandler } from "../../../Utils/ExcelHandler";
import { AppError } from "../../../ErrorHandler/AppError";

export class CreateMultipleMakesUseCase {
  private _makeRepository: IMakeRepository;
  private _excelHandler: ExcelHandler;

  constructor(makeRepository: IMakeRepository, excelHandler: ExcelHandler) {
    this._makeRepository = makeRepository;
    this._excelHandler = excelHandler;
  }

  async execute(file: FileArray): Promise<string> {
    let fileData: UploadedFile;
    fileData = file.fileData as UploadedFile;
    const data: IMakeExcelDto[] = await this._excelHandler.uploadFile(fileData);

    for (const make of data) {
      const checkName = await this._makeRepository.getByMakeName(
        make.make_name
      );

      if (checkName?.make_name === make.make_name) {
        throw new AppError(
          `${make.make_name} already exist please try again`,
          400
        );
      }

      await this._makeRepository.create({
        make_name: make.make_name,
        origin: make.origin,
        active: false,
      });
    }

    return "Data successfully inserted";
  }
}
