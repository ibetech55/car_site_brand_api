import { CreateModelCategoryDbDto } from "../../Data/ModelCategory/CreateModelCategory";
import { UpdateModelCategoryDtoDb } from "../../Data/ModelCategory/UpdateModelCategory";
import { ModelCategories } from "../../Entities/model.categories.entity";

export interface IModelCategoryRepository {
  create(values: CreateModelCategoryDbDto): Promise<ModelCategories>;
  find(): Promise<ModelCategories[]>;
  findById(id:string): Promise<ModelCategories>;
  delete(id: string): Promise<boolean>;
  update(
    id: string,
    values: UpdateModelCategoryDtoDb
  ): Promise<boolean>;
  getByModelCategoryType(type: string): Promise<ModelCategories>;
}
