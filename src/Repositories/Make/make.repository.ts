import { Repository } from "typeorm";
import { AppDataSource } from "../../Infra/Database/connection";
import { Makes } from "../../Entities/makes";
import { IMakeRepository } from "./IMakeRepository";
import { IUpdateMake } from "../../Data/Make/UpdateMakeDto";
import { IMakePagination, IMakeOrderBy } from "../../Data/Make/MakePaginationDto";
import { IGetData, IPagination } from "../../Data/IPagination";

export class MakeRepository implements IMakeRepository {
  private readonly repository: Repository<Makes>;

  constructor() {
    this.repository = AppDataSource.getRepository<Makes>(Makes);
  }
  async verifyMakes(ids: string[], values: IUpdateMake): Promise<Boolean> {
    try {
      await this.repository.update(ids, values);
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  async updateMake(id: string, values: IUpdateMake): Promise<Boolean> {
    try {
      await this.repository.update(id, values);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async getById(id: string): Promise<Makes> {
    try {
      const data = await this.repository.findOneBy({ _id: id });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async getByMakeName(name: string): Promise<Makes> {
    try {
      const data = await this.repository.findOneBy({ make_name: name });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getCarList(): Promise<Makes[]> {
    try {
      const data = await this.repository.find({
        select: ["_id", "make_name"],
        order: { make_name: "ASC" },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async find(query: IPagination<IMakePagination, IMakeOrderBy>): Promise<IGetData<Makes>> {
    try {
      const count = await this.repository.count({...query, skip:0, take:undefined})
      const data = await this.repository.find(query);
      return {count, data}
    } catch (error) {
      console.log(error);
    }
  }
  async create(data: Makes): Promise<Makes> {
    try {
      const createdMake = this.repository.create(data);
      const newMake = await this.repository.save(createdMake);
      return newMake;
    } catch (error) {
      console.log(error);
    }
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
}
