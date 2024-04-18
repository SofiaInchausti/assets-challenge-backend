import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Developer } from "./entities/Developer";
import { Asset } from "./entities/Asset";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "assets",
  synchronize: true,
  logging: true,
  entities: [User, Developer, Asset],
});
