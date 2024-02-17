import { FindOperator } from "typeorm";

export interface IMakePagination {
  make_name?: FindOperator<string>;
  created_at?: FindOperator<string>;
  origin?: FindOperator<string>;
  active?: boolean;
}

export interface IMakeOrderBy {
  make_name?: "asc" | "ASC" | "desc" | "DESC";
  created_at?: "asc" | "ASC" | "desc" | "DESC";
  origin?: "asc" | "ASC" | "desc" | "DESC";
  active?: "asc" | "ASC" | "desc" | "DESC";
}

export interface MakePaginationDto {
  makeName?: string;
  createdAt?: Date;
  origin?: string;
  active?: boolean;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
  orderBy?: {
    makeName?: "asc" | "ASC" | "desc" | "DESC";
    createdAt?: "asc" | "ASC" | "desc" | "DESC";
    origin?: "asc" | "ASC" | "desc" | "DESC";
  }
}

