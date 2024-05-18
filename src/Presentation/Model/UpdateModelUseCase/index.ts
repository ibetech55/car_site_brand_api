import { UpdateModelDto } from "../../../Data/Model/UpdateModelDtos";
import { Makes } from "../../../Entities/makes";
import { Models } from "../../../Entities/models";
import { AppError } from "../../../ErrorHandler/AppError";
import { MakeRepository } from "../../../Repositories/Make/make.repository";
import { IModelRepository } from "../../../Repositories/Model/IModelRepository";

export class UpdateModelUseCase {
  constructor(
    private _modelRepository: IModelRepository,
    private _makeRepositpry: MakeRepository
  ) {}

  async execute(id: string, values: UpdateModelDto) {
    let checkModelName: Models;
    let checkMake: Makes;
    const checkModel = await this._modelRepository.getById(id);

    if (values.modelName) {
      checkModelName = await this._modelRepository.getModelByName(
        values.modelName
      );
    }

    if (values.makeId) {
      checkMake = await this._makeRepositpry.getById(values.makeId);
    }

    if (!checkModel) throw new AppError(`Model does not exists`, 400);
    if (checkModelName && checkModel.model_name !== values.modelName)
      throw new AppError(
        `Model ${checkModelName.model_name} already exists`,
        400
      );
    if (!checkMake && values.makeId) throw new AppError(`Make does not exist exists`, 400);

    const data = await this._modelRepository.update(id, {
      model_name: values.modelName  ? values.modelName : checkModel.model_name,
      make_id: values.makeId ? values.makeId : checkModel.make_id,
      active: values.hasOwnProperty('active') ? values.active : checkModel.active,
      year_founded: values.yearFounded ? +values.yearFounded : checkModel.year_founded
    });
    return data;
  }
}
