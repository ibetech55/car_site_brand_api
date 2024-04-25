export interface GetCarListDto {
  id: string;
  makeName: string;
}

export interface IGetCarList {
  _id?: string;
  make_name: string;
}

export interface IGetCarListQuery {
  active?: string;
}
