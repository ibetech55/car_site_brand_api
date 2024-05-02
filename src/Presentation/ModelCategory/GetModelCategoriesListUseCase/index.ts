import { GetModelCategoryDto, GetModelCategoryListDto } from "../../../Data/ModelCategory/GetModelCategory";
import { ModelCategories } from "../../../Entities/model.categories.entity";
import { IModelCategoryRepository } from "../../../Repositories/ModelCategory/IModelCategoryRepository";

export class GetModelCategoriesListUseCase {
  private readonly _modelCategoriesRepository: IModelCategoryRepository;

  constructor(modelCategoriesRepository: IModelCategoryRepository) {
    this._modelCategoriesRepository = modelCategoriesRepository;
  }

  async execute(): Promise<GetModelCategoryListDto[]> {
    const MCdata = await this._modelCategoriesRepository.find();
    const data: GetModelCategoryListDto[] = MCdata.map((x: ModelCategories) => ({
      id: x._id,
      type: x.type
    }));
    return data;
  }
}
