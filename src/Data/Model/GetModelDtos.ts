import { Models } from "../../Entities/models";

export interface GetModelDto {
  id: string;
  modelName: string;
  makeId: string;
  active: boolean;
  createdAt: string | Date;
  make: { makeName: string };
}

export interface IGetModel {
    _id?: string;
    model_name: string;
    make_id: string;
    active: boolean;
    created_at?: string | Date;
    makes?: { make_name: string };
}
