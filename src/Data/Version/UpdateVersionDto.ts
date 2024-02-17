export interface IUpdateVersion {
    version_name?: string;
    model_id?: string;
    active?: boolean;
    description?: string;
}

export interface UpdateVersionDto {
    versionName?: string;
    modelId?: string;
    description?: string;
    active?: boolean;
}