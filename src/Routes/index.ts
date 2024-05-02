import { Router } from "express";
import { makeRoutes } from "./make";
import { modelRoutes } from "./model";
import { versionRoutes } from "./version";
import { modelCategoryRoutes } from "./model.category";

const apiRoutes = Router();
apiRoutes.use([makeRoutes, modelRoutes, versionRoutes, modelCategoryRoutes])

export { apiRoutes };