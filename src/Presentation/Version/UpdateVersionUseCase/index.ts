import { UpdateVersionDto } from "../../../Data/Version/UpdateVersionDto";
import { AppError } from "../../../ErrorHandler/AppError";
import { IVersionRepository } from "../../../Repositories/Version/IVersionRepository";

export class UpdateVersionUseCase {
  private _repository: IVersionRepository;
  constructor(repository: IVersionRepository) {
    this._repository = repository;
  }

  async execute(id: string, values: UpdateVersionDto) {
    const versionData = await this._repository.getById(id)
    if(!versionData) {
      throw new AppError('Version does not exist', 400)
    }
    const data = await this._repository.update(id, {
      version_name: values.versionName,
      model_id: values.modelId,
      description: values.description,
      active: false
    });
    return data;
  }
}
