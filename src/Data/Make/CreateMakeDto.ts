export interface CreateMakeDto {
  makeName: string;
  origin: string;
  makeImage: File;
  imageId: string;
  company: string;
  yearFounded:string;
}

export interface CreateMakeDbDto {
  make_name: string;
  origin: string;
  make_logo: string;
  year_founded: number;
  company: string;
  active: boolean;
}

export interface CreateMultipleMakesDto {
  make_name: string;
  origin: string;
}

export interface IMakeExcelDto {
  make_name: string;
  origin: string;
  company: string;
  year_founded: string;
}
