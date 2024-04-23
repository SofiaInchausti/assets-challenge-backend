import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Developer } from "./entities/Developer";
import { Asset } from "./entities/Asset";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "db",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_NAME || "assets",
  synchronize: process.env.DB_SYNCHRONIZE === "true" ? true : false,
  logging: process.env.DB_LOGGING === "true" ? true : false,
  entities: [User, Developer, Asset],
});
