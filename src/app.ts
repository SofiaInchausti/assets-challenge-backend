import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(userRoutes);

app.use(morgan("dev"));
app.use(cors());

export default app;
