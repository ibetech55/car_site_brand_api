import { AppError } from "../../../ErrorHandler/AppError";
import { MakeRepository } from "../../../Repositories/Make/make.repository";
import { FileHandler } from "../../../Utils/FileHandler";

export class GetMakeLogoUseCase {
  constructor(
    private _makeRepository: MakeRepository,
    private _filehandler: FileHandler
  ) {}

  async execute(id: string): Promise<string> {
    const makeData = await this._makeRepository.getById(id);
    if (!makeData) {
      throw new AppError("Make does not exists", 400);
    }

    if (makeData.make_logo) {
      return await this._filehandler.getFile(makeData.make_logo);
    } else {
      return "";
    }
  }
}
