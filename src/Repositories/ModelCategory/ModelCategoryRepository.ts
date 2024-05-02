import { Repository } from "typeorm";
import { CreateModelCategoryDbDto } from "../../Data/ModelCategory/CreateModelCategory";
import { ModelCategories } from "../../Entities/model.categories.entity";
import { IModelCategoryRepository } from "./IModelCategoryRepository";
import { AppDataSource } from "../../Infra/Database/connection";

export class ModelCategoryRepository implements IModelCategoryRepository {
  private readonly _repository: Repository<ModelCategories>;

  constructor() {
    this._repository =
      AppDataSource.getRepository<ModelCategories>(ModelCategories);
  }
  getByModelCategoryType(type: string): Promise<ModelCategories> {
    try {
      return this._repository.findOneBy({ type:type });
    } catch (error) {
      console.log(error);
    }
  }
  async find(): Promise<ModelCategories[]> {
    try {
      return this._repository.find({ order: { type: "ASC" } });
    } catch (error) {
      console.log(error);
    }
  }

  async create(values: CreateModelCategoryDbDto): Promise<ModelCategories> {
    try {
      const data = this._repository.create(values);
      const savedData = await this._repository.save(data);
      return savedData;
    } catch (error) {
      console.log(error);
    }
  }
}
