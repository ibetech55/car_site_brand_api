import { Router } from "express";
import { createModelController } from "../Containers/Model/CreateModel";
import { createMultipleModelsController } from "../Containers/Model/CreateMultipleModels";
import { getModelsByMakeIdController } from "../Containers/Model/GetModelsByMakeId";
import { verifyModelsController } from "../Containers/Model/VerifyModels";
import { getModelsController } from "../Containers/Model/GetModels";
import { getModelByIdController } from "../Containers/Model/GetModelById";
import { deleteModelController } from "../Containers/Model/DeleteModel";
import { updateModelController } from "../Containers/Model/UpdateModel";
import { downloadCreateModelsTemplateController } from "../Containers/Model/DownloadCreateModelsTemplate";

const modelRoutes = Router();

modelRoutes.get("/model", (req, res) => getModelsController.handle(req, res));
modelRoutes.get("/model/getById/:id", (req, res) => getModelByIdController.handle(req, res));
modelRoutes.post("/model", (req, res) => createModelController.handle(req, res));
modelRoutes.put("/model/:id", (req, res) => updateModelController.handle(req, res));
modelRoutes.delete("/model/:id", (req, res) => deleteModelController.handle(req, res));
modelRoutes.get("/model/modelsByMakeId/:makeId", (req, res) => getModelsByMakeIdController.handle(req, res));
modelRoutes.post("/model/multiples", (req, res) => createMultipleModelsController.handle(req, res));
modelRoutes.patch("/model/verifyModels/:type", (req, res) => verifyModelsController.handle(req, res));
modelRoutes.get("/model/createModelsTemplate", (req, res) => downloadCreateModelsTemplateController.handle(req, res));

export { modelRoutes };
