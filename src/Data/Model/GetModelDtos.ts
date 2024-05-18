import { Models } from "../../Entities/models";

export interface GetModelDto {
  id: string;
  modelName: string;
  makeId: string;
  active: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
  yearFounded: number;
  make: { makeName: string };
}

export interface IGetModel {
    _id?: string;
    model_name: string;
    make_id: string;
    active: boolean;
    created_at?: string | Date;
    updated_at?: string | Date;
    year_founded: number;
    makes?: { make_name: string };
}
