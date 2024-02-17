import { FileArray, UploadedFile } from "express-fileupload";
import { ExcelHandler } from "../../../Utils/ExcelHandler";
import { IVersionRepository } from "../../../Repositories/Version/IVersionRepository";
import { IVersionExcelDto } from "../../../Data/Version/CreateVersionDto";

export class CreateMultipleVersionsUseCase {
  private _versionRepository: IVersionRepository;
  private _excelHandler: ExcelHandler;

  constructor(versionRepository: IVersionRepository, excelHandler: ExcelHandler) {
    this._versionRepository = versionRepository;
    this._excelHandler = excelHandler;
  }

  async execute(file: FileArray): Promise<string> {
    let fileData: UploadedFile;
    fileData = file.fileData as UploadedFile;
    const data: IVersionExcelDto[] = await this._excelHandler.uploadFile(fileData);

    data.forEach(async (version: IVersionExcelDto) => {
      await this._versionRepository.create({
        version_name: version.version_name,
        model_id: version.model_id,
        description: version.description,
        active: false,
      });
    });
    
    return 'Data insterted';
  }
}
