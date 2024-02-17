import { FindOperator } from "typeorm";

export interface IVersionPagination {
  version_name?: FindOperator<string>;
  created_at?: FindOperator<string>;
  active?: boolean;
  models?: {
    model_name: FindOperator<string>;
    makes?: { make_name: FindOperator<string> };
  };
}

export interface IVersionOrderBy {
  version_name?: "asc" | "ASC" | "desc" | "DESC";
  model_name?: "asc" | "ASC" | "desc" | "DESC";
  models?: {
    model_name: "asc" | "ASC" | "desc" | "DESC";
    makes?: { make_name: "asc" | "ASC" | "desc" | "DESC" };
  };
  created_at?: "asc" | "ASC" | "desc" | "DESC";
  active?: "asc" | "ASC" | "desc" | "DESC";
}

export interface VersionPaginationDto {
  versionName?: string;
  modelName?: string;
  createdAt?: Date;
  makeName?: string;
  active?: boolean;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
  orderBy?: {
    versionName?: "asc" | "ASC" | "desc" | "DESC";
    createdAt?: "asc" | "ASC" | "desc" | "DESC";
    makeName?: "asc" | "ASC" | "desc" | "DESC";
    modelName?: "asc" | "ASC" | "desc" | "DESC";
    active?: "asc" | "ASC" | "desc" | "DESC";
  };
}
