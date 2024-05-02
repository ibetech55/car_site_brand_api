import "reflect-metadata";
import "../../Configs/Enviroment";
import { DataSource } from "typeorm";
import { Makes } from "../../Entities/makes";
import { Models } from "../../Entities/models";
import { Versions } from "../../Entities/versions";
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USERNAME,
} from "../../Configs/Enviroment/EnvirmentVariables";
import { ModelCategories } from "../../Entities/model.categories.entity";
const AppDataSource = new DataSource({
  type: "postgres",
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  host: DATABASE_HOST,
  synchronize: false,
  logging: false,
  entities: [Makes, Models, Versions, ModelCategories],
  migrations: [`${__dirname}/**/Migrations/*.{ts,js}`],
  ssl: false
});
export { AppDataSource };
