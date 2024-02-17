import { IGetData, IPagination } from "../../Data/IPagination";
import { IUpdateVersion } from "../../Data/Version/UpdateVersionDto";
import { IVersionOrderBy, IVersionPagination } from "../../Data/Version/VersionPaginationDto";
import { Versions } from "../../Entities/versions";

export interface IVersionRepository {
  create(data: Versions): Promise<Versions>;
  find(query: IPagination<IVersionPagination, IVersionOrderBy>): Promise<IGetData<Versions>>;
  getByModelId(modelId: string): Promise<Versions[]>
  getById(id: string):Promise<Versions>
  delete(id: string): Promise<boolean>;
  update(id: string, data: IUpdateVersion): Promise<Boolean>;
  verifyVersions(ids:string[]): Promise<Boolean>
}
