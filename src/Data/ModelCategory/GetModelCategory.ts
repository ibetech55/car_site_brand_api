export interface GetModelCategoryDto {
    id:string;
    type:string;
    active:boolean;
    createdAt:string | Date;
    updatedAt:string | Date;
}

export interface GetModelCategoryListDto {
    id:string;
    type:string;
}