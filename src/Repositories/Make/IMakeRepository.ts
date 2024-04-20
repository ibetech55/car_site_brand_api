import { IGetData, IPagination } from "../../Data/IPagination";
import { CreateMakeDbDto, CreateMakeDto } from "../../Data/Make/CreateMakeDto";
import { IGetCarList } from "../../Data/Make/GetCarListDto";
import { IMakeOrderBy, IMakePagination } from "../../Data/Make/MakePaginationDto";
import { IUpdateMake } from "../../Data/Make/UpdateMakeDto";
import { Makes } from "../../Entities/makes";


export interface IMakeRepository {
  create(data: CreateMakeDbDto[]): Promise<boolean>;
  find(query: IPagination<IMakePagination, IMakeOrderBy>): Promise<IGetData<Makes>>;
  getCarList(): Promise<IGetCarList[]>
  getByMakeName(name:string): Promise<Makes>
  getById(id:string): Promise<Makes>
  delete(id: string): Promise<boolean>;
  updateMake(id: string, data: IUpdateMake): Promise<Boolean>;
  verifyMakes(id:string[], values: IUpdateMake): Promise<Boolean>
}
