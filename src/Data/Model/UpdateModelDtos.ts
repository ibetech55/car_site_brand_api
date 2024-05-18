export interface UpdateModelDto {
  modelName?: string;
  makeId?: string;
  active?: boolean;
  yearFounded?: string;
}

export interface IUpdateModel {
  model_name?: string;
  make_id?: string;
  active?: boolean;
  year_founded?: number
}
