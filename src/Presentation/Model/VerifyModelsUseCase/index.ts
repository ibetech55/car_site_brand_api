import { AppError } from "../../../ErrorHandler/AppError";
import { IModelRepository } from "../../../Repositories/Model/IModelRepository";

export class VerifyModelsUseCase {
  private _repository: IModelRepository;
  constructor(repository: IModelRepository) {
    this._repository = repository;
  }

  async execute(ids: string[]): Promise<Boolean> {
    for (const id of ids) {
      const modelData = await this._repository.getById(id);
      if (!modelData) {
        throw new AppError(`Model with ${id} does not exist, please try again`, 400);
      }
    }

    const data = await this._repository.verifyModels(ids, { active: true });
    return data;
  }
}
