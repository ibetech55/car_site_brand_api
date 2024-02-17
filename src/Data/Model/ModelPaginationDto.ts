import { FindOperator } from "typeorm";

export interface IModelPagination {
  model_name?: FindOperator<string>;
  makes?: { make_name: FindOperator<string> };
  created_at?: FindOperator<string>;
  active?: boolean;
}

export interface IModelOrderBy {
  model_name?: "asc" | "ASC" | "desc" | "DESC";
  created_at?: "asc" | "ASC" | "desc" | "DESC";
  makes?: { make_name: "asc" | "ASC" | "desc" | "DESC" };
  active?: "asc" | "ASC" | "desc" | "DESC";
}

export interface ModelPaginationDto {
  modelName?: string;
  makeName?: string;
  active?: boolean;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
  orderBy?: {
    modelName?: "asc" | "ASC" | "desc" | "DESC";
    makeName?: "asc" | "ASC" | "desc" | "DESC";
    active?: "asc" | "ASC" | "desc" | "DESC";
    createdAt?: "asc" | "ASC" | "desc" | "DESC";
  };
}
