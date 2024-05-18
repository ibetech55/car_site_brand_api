export interface UpdateMakeDbDto {
  make_name?: string;
  origin?: string;
  make_logo?: string;
  active?: boolean;
  company: string;
  year_founded?: number;
}

export interface UpdateMakeDto {
  makeName?: string;
  origin?: string;
  makeLogo?: string;
  active?: boolean;
  company?: string;
  yearFounded?: number;
}
