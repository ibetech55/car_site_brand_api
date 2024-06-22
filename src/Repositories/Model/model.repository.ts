import { Repository } from "typeorm";
import { AppDataSource } from "../../Infra/Database/connection";
import { IModelRepository } from "./IModelRepository";
import { Models } from "../../Entities/models";
import { IUpdateModel } from "../../Data/Model/UpdateModelDtos";
import { IGetData, IPagination } from "../../Data/IPagination";
import {
  IModelPagination,
  IModelOrderBy,
} from "../../Data/Model/ModelPaginationDto";
import { CreateModelDbDto } from "../../Data/Model/CreateModelDtos";

export class ModelRepository implements IModelRepository {
  private readonly repository: Repository<Models>;

  constructor() {
    this.repository = AppDataSource.getRepository<Models>(Models);
  }
  getModelByName(modelName: string): Promise<Models> {
    try {
      return this.repository.findOneBy({ model_name: modelName });
    } catch (error) {
      console.log(error);
    }
  }
  async delete(id: string): Promise<boolean> {
    try {
      await this.update(id, { active: false });
      await this.repository.softDelete(id);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async update(id: string, data: IUpdateModel): Promise<Boolean> {
    try {
      await this.repository.update(id, data);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async getById(id: string): Promise<Models> {
    try {
      const data = await this.repository.findOne({
        where: { _id: id },
        relations: ["makes"],
        select: { makes: { make_name: true } },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async find(
    query: IPagination<IModelPagination, IModelOrderBy>
  ): Promise<IGetData<Models>> {
    try {
      const count = await this.repository.count({
        ...query,
        take: undefined,
        skip: undefined,
      });
      const data = await this.repository.find({
        relations: ["makes"],
        select: { makes: { make_name: true } },
        ...query,
      });
      return { data, count };
    } catch (error) {
      console.log(error);
    }
  }
  async verifyModels(ids: string[], values: IUpdateModel): Promise<Boolean> {
    try {
      await this.repository.update(ids, values);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async getModelsByMakeId(makeId: string): Promise<Models[]> {
    try {
      const data = await this.repository.find({
        where: [{ make_id: makeId, active: true }],
        relations: ["makes"],
        order: { model_name: "ASC" },
        select: { makes: { make_name: true } },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async create(data: CreateModelDbDto[]): Promise<boolean> {
    try {
      const createdModel = this.repository.create(data);
      await this.repository.save(createdModel);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}
