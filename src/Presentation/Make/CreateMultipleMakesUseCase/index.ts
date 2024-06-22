import { FileArray, UploadedFile } from "express-fileupload";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";
import {
  CreateMakeDbDto,
  IMakeExcelDto,
} from "../../../Data/Make/CreateMakeDto";
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
    const newData: CreateMakeDbDto[] = [];
    const errorMakeNames: string[] = [];
    let fileData: UploadedFile;
    fileData = file.fileData as UploadedFile;
    const { data, columns } =
      await this._excelHandler.uploadFile<IMakeExcelDto>(fileData);

    if (
      !columns.includes("make_name") ||
      !columns.includes("origin") ||
      !columns.includes("company") ||
      !columns.includes("year_founded") ||
      columns.length > 4
    ) {
      throw new AppError(
        `The following columns must only be included [make_name, origin, company, year_founded]`,
        400
      );
    }

    for (let make of data) {
      const checkName = await this._makeRepository.getByMakeName(
        make.make_name
      );

      if (checkName) {
        errorMakeNames.push(checkName.make_name);
      } else {
        newData.push({
          make_name: make.make_name,
          origin: make.origin,
          active: false,
          company: make.company,
          year_founded: +make.year_founded,
          make_logo: "",
        });
      }
    }

    if (errorMakeNames.length > 0) {
      throw new AppError(
        `The following makes already exist ${errorMakeNames}`,
        400
      );
    }
    await this._makeRepository.create(newData);
    return "Data successfully inserted";
  }
}
