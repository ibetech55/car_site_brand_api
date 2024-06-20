import { DownloadCreateMakesTemplateController } from "../../Controllers/Make/DownloadCreateMakesTemplateController";
import { DownloadCreateMakesTemplateUseCase } from "../../Presentation/Make/DownloadCreateMakesTemplateUsecase";

const downloadCreateMakesUseCase = new DownloadCreateMakesTemplateUseCase();
const downloadCreateMakesTemplateController =
  new DownloadCreateMakesTemplateController(downloadCreateMakesUseCase);

export { downloadCreateMakesUseCase, downloadCreateMakesTemplateController };
