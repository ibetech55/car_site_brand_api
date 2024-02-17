import { Repository } from "typeorm";
import { AppDataSource } from "../../Infra/Database/connection";
import { Versions } from "../../Entities/versions";
import { IVersionRepository } from "./IVersionRepository";
import { IUpdateVersion } from "../../Data/Version/UpdateVersionDto";
import { IPagination, IGetData } from "../../Data/IPagination";
import {
  IVersionPagination,
  IVersionOrderBy,
} from "../../Data/Version/VersionPaginationDto";

export class VersionRepository implements IVersionRepository {
  private readonly repository: Repository<Versions>;

  constructor() {
    this.repository = AppDataSource.getRepository<Versions>(Versions);
  }
  async delete(id: string): Promise<boolean> {
    try {
      await this.repository.update(id, { active: false });
      await this.repository.softDelete(id);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async update(id: string, data: IUpdateVersion): Promise<Boolean> {
    try {
      await this.repository.update(id, data);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async verifyVersions(ids: string[]): Promise<Boolean> {
    try {
      await this.repository.update(ids, { active: true });
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async getById(id: string): Promise<Versions> {
    try {
      const data = await this.repository.findOne({
        where: { _id: id },
        relations: ["models", "models.makes"],
        select: {
          models: { model_name: true, makes: { make_name: true, _id: true } },
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async getByModelId(modelId: string): Promise<Versions[]> {
    try {
      const data = await this.repository.find({
        where: { model_id: modelId },
        relations: ["models", "models.makes"],
        select: {
          models: { model_name: true, makes: { make_name: true, _id: true } },
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async create(data: Versions): Promise<Versions> {
    try {
      const createdVersion = this.repository.create(data);
      const newVersion = await this.repository.save(createdVersion);
      return newVersion;
    } catch (error) {
      console.log(error);
    }
  }
  async find(
    query: IPagination<IVersionPagination, IVersionOrderBy>
  ): Promise<IGetData<Versions>> {
    try {
      const count = await this.repository.count({
        ...query,
        skip: 0,
        take: undefined
      });

      const data = await this.repository.find({
        relations: ["models", "models.makes"],
        select: {
          models: { model_name: true, makes: { make_name: true, _id: true } },
        },
        ...query
      });
      return { data, count };
    } catch (error) {
      console.log(error);
    }
  }
}
