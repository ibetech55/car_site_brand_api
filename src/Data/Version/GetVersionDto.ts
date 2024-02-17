export interface GetVersionDto {
  id: string;
  versionName: string;
  modelId: string;
  description: string;
  active: boolean;
  createdAt: string | Date;
  model: ModelDataDto;
}

export interface GetVersionsByModelIdDto {
  versions: {
    id: string;
    versionName: string;
    modelId: string;
    description: string;
    active: boolean;
    createdAt: string | Date;
  }[];
  model: ModelDataDto;
}

export interface ModelDataDto {
  modelName: string;
  make: { makeName: string; makeId: string };
}

export interface IModelData {
    model_name: string;
    makes: { make_name: string; make_id: string };
  }
