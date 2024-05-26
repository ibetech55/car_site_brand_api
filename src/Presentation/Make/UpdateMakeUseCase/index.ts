import { UpdateMakeDto } from "../../../Data/Make/UpdateMakeDto";
import { AppError } from "../../../ErrorHandler/AppError";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";

export class UpdateMakeUseCase {
  private _repository: IMakeRepository;
  constructor(repository: IMakeRepository) {
    this._repository = repository;
  }

  async execute(id: string, values: UpdateMakeDto) {
    const makeName = values.makeName;

    const check = await this._repository.getByMakeName(makeName);
    if (check && check._id !== id) {
      throw new AppError(`${makeName} already exists`, 400);
    }

    const data = await this._repository.updateMake(id, {
      make_name: makeName,
      origin: values.origin,
      active: values.active,
      company: values.company,
      year_founded: +values.yearFounded,
    });
    return data;
  }
}
