import { GetModelCategoryListDto } from "../ModelCategory/GetModelCategory";

export interface CreateModelDto {
  modelName: string;
  bodyType: string[];
  makeId: string;
  yearFounded: number;
}

export interface CreateModelDbDto {
  model_name: string;
  make_id: string;
  body_type: string;
  year_founded: number;
  active:boolean;
}

export interface CreateMultipleModelsDto {
  model_name: string;
  make_id: string;
}

export interface IModelExcelDto {
  model_name: string;
  make_name: string;
  body_type: string;
  year_founded: string;
}
