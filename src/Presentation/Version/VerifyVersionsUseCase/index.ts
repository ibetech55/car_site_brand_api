import { AppError } from "../../../ErrorHandler/AppError";
import { IVersionRepository } from "../../../Repositories/Version/IVersionRepository";

export class VerifyVersionsUseCase {
  private _repository: IVersionRepository;
  constructor(repository: IVersionRepository) {
    this._repository = repository;
  }

  async execute(ids: string[]): Promise<Boolean> {
    for (const id of ids) {
      const versionData = await this._repository.getById(id);
      if (!versionData) {
        throw new AppError(`Version with ${id} does not exist, please try again`, 400);
      }

      if (versionData.active) {
        throw new AppError(`${versionData.models.makes.make_name} ${versionData.models.model_name} ${versionData.version_name} has already been verified, please try again`, 400);
      }

    }

    const data = await this._repository.verifyVersions(ids);
    return data;
  }
}
