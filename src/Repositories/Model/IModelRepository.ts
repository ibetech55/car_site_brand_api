import { IGetData, IPagination } from "../../Data/IPagination";
import { IModelPagination, IModelOrderBy } from "../../Data/Model/ModelPaginationDto";
import { IUpdateModel } from "../../Data/Model/UpdateModelDtos";
import { Models } from "../../Entities/models";


export interface IModelRepository {
  create(data: Models): Promise<Models>;
  getModelsByMakeId(makeId:string): Promise<Models[]>
  verifyModels(ids:string[], values: IUpdateModel): Promise<Boolean>
  find(query: IPagination<IModelPagination, IModelOrderBy>): Promise<IGetData<Models>>;
  getById(id: string): Promise<Models>
  delete(id: string): Promise<boolean>;
  update(id: string, data: IUpdateModel): Promise<Boolean>;
}
