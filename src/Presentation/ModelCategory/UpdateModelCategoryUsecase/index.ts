import { UpdateModelCategoryDto } from "../../../Data/ModelCategory/UpdateModelCategory";
import { AppError } from "../../../ErrorHandler/AppError";
import { IModelCategoryRepository } from "../../../Repositories/ModelCategory/IModelCategoryRepository";

export class UpdateModelCategoryUseCase {
  constructor(private _modelCategoryRepository: IModelCategoryRepository) {}

  async execute(id: string, values: UpdateModelCategoryDto) {
    const mcData = await this._modelCategoryRepository.findById(id);
    let updatedValues: UpdateModelCategoryDto = {};

    if (!mcData) {
      throw new AppError("No Model Category found", 404);
    }

    if (values.type) {
      const checkType =
        await this._modelCategoryRepository.getByModelCategoryType(values.type);
      if (checkType && id !== checkType._id && values.type === checkType.type) {
        throw new AppError(`Type ${values.type} already exists`, 400);
      } else {
        updatedValues.type = values.type;
      }
    }

    if (values.hasOwnProperty('active')) {
      updatedValues.active = values.active;
    }

    const result = await this._modelCategoryRepository.update(
      id,
      updatedValues
    );

    return result;
  }
}
