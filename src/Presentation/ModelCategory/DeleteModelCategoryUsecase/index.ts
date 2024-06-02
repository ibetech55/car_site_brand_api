import { AppError } from "../../../ErrorHandler/AppError";
import { IModelCategoryRepository } from "../../../Repositories/ModelCategory/IModelCategoryRepository";

export class DeleteModelCategoryUseCase {
  constructor(private _modelCategoryRepository: IModelCategoryRepository) {}

  async execute(id: string) {
    const mcData = await this._modelCategoryRepository.findById(id);
    if (!mcData) {
      throw new AppError("Model Category does not exist", 404);
    }

    const res = await this._modelCategoryRepository.delete(id);
    return res;
  }
}
