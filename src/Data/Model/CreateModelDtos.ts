export interface CreateModelDto {
  modelName: string;
  modelCategoryId: string;
  makeId: string;
  yearFounded: number;
}

export interface CreateModelDbDto {
  model_name: string;
  make_id: string;
  model_category_id: string;
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
  model_category: string;
  year_founded: string;
}
