import { FileArray, UploadedFile } from "express-fileupload";
import { ExcelHandler } from "../../../Utils/ExcelHandler";
import { IModelRepository } from "../../../Repositories/Model/IModelRepository";
import { IModelExcelDto } from "../../../Data/Model/CreateModelDtos";

export class CreateMultipleModelsUseCase {
  private _modelRepository: IModelRepository;
  private _excelHandler: ExcelHandler;

  constructor(modelRepository: IModelRepository, excelHandler: ExcelHandler) {
    this._modelRepository = modelRepository;
    this._excelHandler = excelHandler;
  }

  async execute(file: FileArray): Promise<string> {
    let fileData: UploadedFile;
    fileData = file.fileData as UploadedFile;
    const data: IModelExcelDto[] = await this._excelHandler.uploadFile(fileData);

    data.forEach(async (model: IModelExcelDto) => {
      await this._modelRepository.create({
        model_name: model.model_name,
        make_id: model.make_id,
        active: false,
      });
    });
    
    return 'Data insterted';
  }
}
