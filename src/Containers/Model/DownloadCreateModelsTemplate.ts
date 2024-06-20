import { DownloadCreateModelsTemplateController } from "../../Controllers/Model/DownloadCreateModelsTemplateController";
import { DownloadCreateModelsTemplateUseCase } from "../../Presentation/Model/DownloadCreateModelTemplateUseCase";


const downloadCreateModelsUseCase = new DownloadCreateModelsTemplateUseCase();
const downloadCreateModelsTemplateController =
  new DownloadCreateModelsTemplateController(downloadCreateModelsUseCase);

export { downloadCreateModelsUseCase, downloadCreateModelsTemplateController };
