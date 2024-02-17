import { UpdateModelDto } from "../../../Data/Model/UpdateModelDtos";
import { IModelRepository } from "../../../Repositories/Model/IModelRepository";

export class UpdateModelUseCase {
  private _repository: IModelRepository;
  constructor(repository: IModelRepository) {
    this._repository = repository;
  }

  async execute(id: string, values: UpdateModelDto) {
    const data = await this._repository.update(id, {
      model_name: values.modelName,
      make_id: values.makeId,
      active: false
    });
    return data;
  }
}
