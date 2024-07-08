import { IModelRepository } from "../../../Repositories/Model/IModelRepository";
import {
  CreateModelDbDto,
  CreateModelDto,
} from "../../../Data/Model/CreateModelDtos";
import { AppError } from "../../../ErrorHandler/AppError";

export class CreateModelUseCase {
  private _modelRepository: IModelRepository;

  constructor(modelRepository: IModelRepository) {
    this._modelRepository = modelRepository;
  }

  async execute(values: CreateModelDto[]) {
    console.log(values)
    const nameErrors = [];
    const newData: CreateModelDbDto[] = [];
    for (let model of values) {
      const getBodyTypes = [];
      model.bodyType.forEach(bt=>{
        getBodyTypes.push(bt)
      })

      const checkName = await this._modelRepository.getModelByName(
        model.modelName
      );
      if (checkName) {
        nameErrors.push(checkName.model_name);
      } else {
        newData.push({
          model_name: model.modelName,
          make_id: model.makeId,
          active: false,
          body_type: getBodyTypes.join(','),
          year_founded: model.yearFounded,
        });
      }
    }

    if (nameErrors.length > 0) {
      throw new AppError(
        {
          text: `The following model names ${JSON.stringify(
            nameErrors
          )} already exist, please try agian`,
          models: nameErrors,
        },
        400
      );
    }
    const modelData = await this._modelRepository.create(newData);

    return modelData;
  }
}
