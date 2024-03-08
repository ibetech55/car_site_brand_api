import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import path from "path";
import expressFileUpload from "express-fileupload";
import YAML from "yamljs";
import "../../Configs/Enviroment";
import { AppError } from "../../ErrorHandler/AppError";
import { apiRoutes } from "../../Routes";
import {
  BRAND_API_DOMAIN,
  CAR_SITE_FRONTEND_URL,
  NODE_ENV,
  PORT,
} from "../../Configs/Enviroment/EnvirmentVariables";
class HttpServer {
  app: express.Express;
  private corsOrgins = [CAR_SITE_FRONTEND_URL];
  constructor() {
    this.app = express();
    this.middlewares();
    this.defaultHeaders();
    this.routes();
    this.errorHandler();
    this.swaggerInit();

    console.log("Connected to Http Server");
  }

  swaggerInit() {
    const swaggerDocument = YAML.load(
      `${path.resolve()}/src/Configs/swagger.yaml`
    );
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }

  listen() {
    if (NODE_ENV === "development") {
      this.app.listen(PORT, () =>
        console.log(`Listening to ${PORT}`)
      );
    } else {
      this.app.listen(PORT, () => console.log(`Listening to ${PORT}`));
    }
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(expressFileUpload());
    this.app.use(
      cors({
        origin: this.corsOrgins,
        credentials: true,
      })
    );
    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use("/brand_api", apiRoutes);
  }

  errorHandler() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof AppError) {
          return res.status(err.statusCode).json({ message: err.message });
        } else {
          return res
            .status(500)
            .json({ message: `Internal Server Error ${err.message}` });
        }
      }
    );
  }
  defaultHeaders() {
    this.app.use((req, res, next) => {
      const origin = this.corsOrgins.includes(req.header('origin'))
        ? req.headers.origin
        : null;
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH"
      );
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      next();
    });
  }
}

export default new HttpServer();
