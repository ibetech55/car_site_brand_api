import { ModelCategoryRepository } from "../../../Repositories/ModelCategory/ModelCategoryRepository";

export class GetModelCategoryByIdUseCase {
  constructor(private _modelCategoryRepository: ModelCategoryRepository) {}

  async execute(id: string) {
    const mcData = await this._modelCategoryRepository.findById(id);
    const data = {
      id: mcData._id,
      type: mcData.type,
      active: mcData.active,
      createdAt: mcData.created_at,
      updatedAt: mcData.updated_at,
    };
    return data;
  }
}
