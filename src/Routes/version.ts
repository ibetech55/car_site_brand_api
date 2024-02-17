import { Router } from "express";
import { createVersionController } from "../Containers/Version/CreateVersion";
import { createMultipleVersionsController } from "../Containers/Version/CreateMultipleVersions";
import { getVersionsController } from "../Containers/Version/GetVersions";
import { getVersionsByModelIdController } from "../Containers/Version/GetVersionsByModelId";
import { verifyVersionsController } from "../Containers/Version/VerifyVersions";
import { getVersionByIdController } from "../Containers/Version/GetVersionById";
import { deleteVersionController } from "../Containers/Version/DeleteVersion";
import { updateVersionController } from "../Containers/Version/UpdateVersion";

const versionRoutes = Router();
versionRoutes.get("/version", (req, res) => getVersionsController.handle(req, res));
versionRoutes.get("/version/getByModelId/:modelId", (req, res) => getVersionsByModelIdController.handle(req, res));
versionRoutes.get("/version/:id", (req, res) => getVersionByIdController.handle(req, res));
versionRoutes.post("/version", (req, res) => createVersionController.handle(req, res));
versionRoutes.post("/version/multiples", (req, res) => createMultipleVersionsController.handle(req, res));
versionRoutes.delete("/version/:id", (req, res) => deleteVersionController.handle(req, res));
versionRoutes.put("/version/:id", (req, res) => updateVersionController.handle(req, res));
versionRoutes.patch("/version/verifyVersions", (req, res) => verifyVersionsController.handle(req, res));

export { versionRoutes };
