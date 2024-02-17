import { Router } from "express";
import { makeRoutes } from "./make";
import { modelRoutes } from "./model";
import { versionRoutes } from "./version";

const apiRoutes = Router();
apiRoutes.use([makeRoutes, modelRoutes, versionRoutes])

export { apiRoutes };