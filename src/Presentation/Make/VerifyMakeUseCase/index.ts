import { AppError } from "../../../ErrorHandler/AppError";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";

export class VerifyMakeUseCase {
  private _repository: IMakeRepository;
  constructor(repository: IMakeRepository) {
    this._repository = repository;
  }

  async execute(ids: string[], type:string): Promise<Boolean> {
    for (const id of ids) {
      const makeData = await this._repository.getById(id);
      if (!makeData) {
        throw new AppError(`Make with ${id} does not exist, please try again`, 400);
      }
    }

    const data = await this._repository.verifyMakes(ids, { active: type === 'activate' ? true : false });
    return data;
  }
}
