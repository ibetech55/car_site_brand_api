import { GetModelCategoryDto } from "../../../Data/ModelCategory/GetModelCategory";
import { ModelCategories } from "../../../Entities/model.categories.entity";
import { IModelCategoryRepository } from "../../../Repositories/ModelCategory/IModelCategoryRepository";

export class GetModelCategoriesUseCase {
  private readonly _modelCategoriesRepository: IModelCategoryRepository;

  constructor(modelCategoriesRepository: IModelCategoryRepository) {
    this._modelCategoriesRepository = modelCategoriesRepository;
  }

  async execute(): Promise<GetModelCategoryDto[]> {
    const MCdata = await this._modelCategoriesRepository.find();
    const data: GetModelCategoryDto[] = MCdata.map((x: ModelCategories) => ({
      id: x._id,
      type: x.type,
      active: x.active,
      createdAt: x.created_at,
      updatedAt: x.updated_at,
    }));
    return data;
  }
}
