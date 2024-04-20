export interface CreateMakeDto {
  makeName: string;
  origin: string;
  makeImage: File;
  imageId: string
}

export interface CreateMakeDbDto {
  make_name: string;
  origin: string;
  make_logo: string;
  active: boolean;
}

export interface CreateMultipleMakesDto {
  make_name: string;
  origin: string;
}

export interface IMakeExcelDto {
  make_name: string;
  origin: string;
}
