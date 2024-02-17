export interface CreateVersionDto {
    versionName: string;
    modelId: string;
    description?: string;
}

export interface GetCreatedVersionDto {
    id: string;
    versionName: string;
    modelId: string;
    description: string;
    active:boolean;
    createdAt: string | Date;
}

export interface IVersionExcelDto {
    version_name: string;
    model_id: string;
    description: string;
  }