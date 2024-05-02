import { Router } from "express";
import { createMakeController } from "../Containers/Make/CreateMake";
import { createMultipleMakesController } from "../Containers/Make/CreateMultipleMakes";
import { getCarListController } from "../Containers/Make/GetCarList";
import { getMakesController } from "../Containers/Make/GetMakes";
import { getMakeByIdController } from "../Containers/Make/GetByMakeId";
import { deleteMakeController } from "../Containers/Make/DeleteMake";
import { updateMakeController } from "../Containers/Make/UpdateMake";
import { verifyMakeController } from "../Containers/Make/VerifyMake";
import { changeMakeLogoController } from "../Containers/Make/ChangeLogo";

const makeRoutes = Router();
makeRoutes.get("/make/carList", (req, res) => getCarListController.handle(req, res));
makeRoutes.patch("/make/verifyMake/:type", (req, res) => verifyMakeController.handle(req, res));
makeRoutes.patch("/make/changeMakeLogo/:id", (req, res) => changeMakeLogoController.handle(req, res));
makeRoutes.get("/make", (req, res) => getMakesController.handle(req, res));
makeRoutes.delete("/make/:id", (req, res) => deleteMakeController.handle(req, res));
makeRoutes.put("/make/:id", (req, res) => updateMakeController.handle(req, res));
makeRoutes.get("/make/:id", (req, res) => getMakeByIdController.handle(req, res));
makeRoutes.post("/make", (req, res) => createMakeController.handle(req, res));
makeRoutes.post("/make/multiples", (req, res) => createMultipleMakesController.handle(req, res));

export { makeRoutes };
