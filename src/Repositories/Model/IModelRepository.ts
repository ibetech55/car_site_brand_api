import { IGetData, IPagination } from "../../Data/IPagination";
import { CreateModelDbDto } from "../../Data/Model/CreateModelDtos";
import { IModelPagination, IModelOrderBy } from "../../Data/Model/ModelPaginationDto";
import { IUpdateModel } from "../../Data/Model/UpdateModelDtos";
import { Models } from "../../Entities/models";


export interface IModelRepository {
  create(data: CreateModelDbDto[]): Promise<boolean>;
  getModelsByMakeId(makeId:string): Promise<Models[]>;
  getModelByName(modelName:string): Promise<Models>;
  verifyModels(ids:string[], values: IUpdateModel): Promise<Boolean>
  find(query: IPagination<IModelPagination, IModelOrderBy>): Promise<IGetData<Models>>;
  getById(id: string): Promise<Models>
  delete(id: string): Promise<boolean>;
  update(id: string, data: IUpdateModel): Promise<Boolean>;
  export<T>(
    columns:T,
    query: IPagination<IModelPagination, IModelOrderBy>
  ): Promise<IGetData<Models>> 
}
