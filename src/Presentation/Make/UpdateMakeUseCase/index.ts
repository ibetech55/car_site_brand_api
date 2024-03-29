import { UpdateMakeDto } from "../../../Data/Make/UpdateMakeDto";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";

export class UpdateMakeUseCase {
  private _repository: IMakeRepository;
  constructor(repository: IMakeRepository) {
    this._repository = repository;
  }

  async execute(id: string, values: UpdateMakeDto) {
    const data = await this._repository.updateMake(id, {
      make_name: values.makeName,
      origin: values.origin,
      make_logo: values.makeLogo,
      active: values.active,
    });
    return data;
  }
}
