import { FileArray, UploadedFile } from "express-fileupload";
import { ExcelHandler } from "../../../Utils/ExcelHandler";
import { IModelRepository } from "../../../Repositories/Model/IModelRepository";
import {
  CreateModelDbDto,
  IModelExcelDto,
} from "../../../Data/Model/CreateModelDtos";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";
import { IModelCategoryRepository } from "../../../Repositories/ModelCategory/IModelCategoryRepository";
import { AppError } from "../../../ErrorHandler/AppError";

interface ModelErrors {
  makeError?: string;
  modelError?: string;
  modelCategoryError?: string;
  columnError?: string;
}
export class CreateMultipleModelsUseCase {
  private _modelRepository: IModelRepository;
  private _makeRepository: IMakeRepository;
  private _modelCategoryRepository: IModelCategoryRepository;
  private _excelHandler: ExcelHandler;

  constructor(
    modelRepository: IModelRepository,
    makeRepository: IMakeRepository,
    modelCategoryRepository: IModelCategoryRepository,
    excelHandler: ExcelHandler
  ) {
    this._modelRepository = modelRepository;
    this._makeRepository = makeRepository;
    this._modelCategoryRepository = modelCategoryRepository;
    this._excelHandler = excelHandler;
  }

  async execute(file: FileArray): Promise<boolean> {
    const errors: ModelErrors = {};
    const makeErrors: string[] = [];
    const modelErrors: string[] = [];
    const modelCatErrors: string[] = [];
    const columnErrors: string[] = [];
    const newData: CreateModelDbDto[] = [];
    let fileData: UploadedFile;
    fileData = file.fileData as UploadedFile;
    const { data, columns }: { data: IModelExcelDto[]; columns: string[] } =
      await this._excelHandler.uploadFile(fileData);
    if (!columns.includes("model_name")) {
      columnErrors.push(columns[0]);
    }
    if (!columns.includes("year_founded")) {
      columnErrors.push(columns[1]);
    }
    if (!columns.includes("make_name")) {
      columnErrors.push(columns[2]);
    }
    if (!columns.includes("body_type")) {
      columnErrors.push(columns[3]);
    }
    if (columnErrors.length > 0 || columns.length !== 4) {
      errors.columnError = `Must contain only the followning columns [model_name, year_founded, make_name, model_category]`;
      throw new AppError(errors, 400);
    }
    for (let item of data) {
      const [modelData, makeData] = await Promise.all([
        this._modelRepository.getModelByName(item.model_name),
        this._makeRepository.getByMakeName(item.make_name),
      ]);
      if (modelData) {
        modelErrors.push(item.model_name);
      }
      if (!makeData) {
        makeErrors.push(item.make_name);
      }


      if (!modelData) {
        newData.push({
          model_name: item.model_name,
          make_id: makeData._id,
          body_type: item.bodyType,
          active: false,
          year_founded: makeData.year_founded ? makeData.year_founded : undefined
        });
      }
    }

    if (modelErrors.length > 0) {
      errors.modelError = `The following models already exist ${JSON.stringify(
        modelErrors
      )}`;
    }

    if (makeErrors.length > 0) {
      errors.makeError = `The following makes do not exist ${JSON.stringify(
        makeErrors
      )}`;
    }

    if (modelCatErrors.length > 0) {
      errors.modelCategoryError = `The following Model Categories do not exist ${JSON.stringify(
        modelCatErrors
      )}`;
    }

    if (Object.keys(errors).length > 0) {
      throw new AppError(errors, 400);
    }
    await this._modelRepository.create(newData);
    return true;
  }
}
