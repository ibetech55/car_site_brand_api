export interface CreateModelDto {
  modelName: string;
  modelCategoryId: string;
  makeId: string;
}

export interface CreateMultipleModelsDto {
  model_name: string;
  make_id: string;
}

export interface IModelExcelDto {
  model_name: string;
  make_id: string;
}
