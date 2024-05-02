import { CreateModelCategoryDbDto } from "../../Data/ModelCategory/CreateModelCategory";
import { ModelCategories } from "../../Entities/model.categories.entity";

export interface IModelCategoryRepository {
  create(values: CreateModelCategoryDbDto): Promise<ModelCategories>;
  find(): Promise<ModelCategories[]>;
  getByModelCategoryType(type: string): Promise<ModelCategories>;
}
