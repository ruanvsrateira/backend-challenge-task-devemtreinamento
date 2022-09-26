import express, { json } from "express";
import { routes } from "./routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(json());
app.use(routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { app };
