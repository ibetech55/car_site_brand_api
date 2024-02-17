import { IModelRepository } from "../../../Repositories/Model/IModelRepository";
import { CreateModelDto } from "../../../Data/Model/CreateModelDtos";

export class CreateModelUseCase {
  private _modelRepository: IModelRepository;

  constructor(modelRepository: IModelRepository) {
    this._modelRepository = modelRepository;
  }

  async execute(values: CreateModelDto) {


    const modelData = await this._modelRepository.create({
        model_name: values.modelName,
        make_id: values.makeId,
        active: true
    })

    return modelData;
  }
}
