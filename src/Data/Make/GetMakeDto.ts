export interface GetMakeDto {
  id: string;
  makeName: string;
  origin: string;
  makeLogo: string;
  active: boolean;
  company: string;
  yearFounded: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface IGetMake {
  _id?: string;
  make_name: string;
  origin: string;
  make_logo?: string;
  active: boolean;
  company: string;
  year_founded: string;
  created_at?: string | Date;
  updated_at?: string | Date;
}
