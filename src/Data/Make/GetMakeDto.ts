import { Makes } from "../../Entities/makes";

export interface GetMakeDto {
    id: string;
    makeName: string;
    origin: string;
    makeLogo: string;
    active: boolean;
    createdAt: string | Date;
}

export interface IGetMake {
    _id?: string;
    make_name: string;
    origin: string;
    make_logo?: string;
    active: boolean;
    created_at?: string | Date;
}