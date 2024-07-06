import { FindOptionsSelect } from "typeorm";
import { IGetData, IPagination } from "../../Data/IPagination";
import { CreateMakeDbDto, CreateMakeDto } from "../../Data/Make/CreateMakeDto";
import { IGetCarList } from "../../Data/Make/GetCarListDto";
import { IMakeOrderBy, IMakePagination, MakePaginationDto } from "../../Data/Make/MakePaginationDto";
import { UpdateMakeDbDto } from "../../Data/Make/UpdateMakeDto";
import { Makes } from "../../Entities/makes";


export interface IMakeRepository {
  create(data: CreateMakeDbDto[]): Promise<boolean>;
  find(query: IPagination<IMakePagination, IMakeOrderBy>): Promise<IGetData<Makes>>;
  getCarList(active:string): Promise<IGetCarList[]>;
  getByMakeName(name:string): Promise<Makes>
  getById(id:string): Promise<Makes>
  delete(id: string): Promise<boolean>;
  updateMake(id: string, data: UpdateMakeDbDto): Promise<Boolean>;
  verifyMakes(id:string[], values: UpdateMakeDbDto): Promise<Boolean>;
  export(
    columns:string[],
    query: IPagination<IMakePagination, IMakeOrderBy>
  ): Promise<IGetData<Makes>> 
}
