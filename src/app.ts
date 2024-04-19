import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import develperRoutes from "./routes/developer.routes";
import assetRoutes from "./routes/asset.routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(userRoutes, develperRoutes, assetRoutes);

export default app;
