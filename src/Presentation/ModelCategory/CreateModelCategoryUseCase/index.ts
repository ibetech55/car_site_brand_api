import { CreateModelCategoryDbDto } from "../../../Data/ModelCategory/CreateModelCategory";
import { ModelCategories } from "../../../Entities/model.categories.entity";
import { IModelCategoryRepository } from "../../../Repositories/ModelCategory/IModelCategoryRepository";
import { AppError } from "../../../ErrorHandler/AppError";

export class CreateModelCategoryUseCase {
  private readonly _modelCategoriesRepository: IModelCategoryRepository;

  constructor(modelCategoriesRepository: IModelCategoryRepository) {
    this._modelCategoriesRepository = modelCategoriesRepository;
  }

  async execute(values: CreateModelCategoryDbDto): Promise<ModelCategories> {
    const mcData = await this._modelCategoriesRepository.getByModelCategoryType(values.type);
    if(mcData) {
      throw new AppError(`Model ${values.type} already exists`, 400);
    }

    const data = await this._modelCategoriesRepository.create({
      type: values.type,
      active: false,
    });
    return data;
  }
}
