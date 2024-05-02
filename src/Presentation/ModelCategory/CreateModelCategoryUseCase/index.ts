import { CreateModelCategoryDbDto } from "../../../Data/ModelCategory/CreateModelCategory";
import { ModelCategories } from "../../../Entities/model.categories.entity";
import { IModelCategoryRepository } from "../../../Repositories/ModelCategory/IModelCategoryRepository";

export class CreateModelCategoryUseCase {
  private readonly _modelCategoriesRepository: IModelCategoryRepository;

  constructor(modelCategoriesRepository: IModelCategoryRepository) {
    this._modelCategoriesRepository = modelCategoriesRepository;
  }

  async execute(values: CreateModelCategoryDbDto): Promise<ModelCategories> {
    const data = await this._modelCategoriesRepository.create({
      type: values.type,
      active: true,
    });
    return data;
  }
}
