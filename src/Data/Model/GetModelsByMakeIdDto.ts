import { Makes } from "../../Entities/makes";
import { GetMakeDto, IGetMake } from "../Make/GetMakeDto";

export interface GetModelsByMakeIdDto {
    id: string;
    modelName:string;
    makeId: string;
    active: boolean;
    make?: {makeName: string}
}

export interface IGetModelsByMakeId {
    _id?: string;
    model_name: string;
    make_id: string;
    active: boolean;
    makes?: IGetMake
}