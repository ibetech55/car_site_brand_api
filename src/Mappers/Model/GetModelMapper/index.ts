import { GetModelDto, IGetModel } from "../../../Data/Model/GetModelDtos";

export class GetModelMapper {
  map(values: IGetModel): GetModelDto {
    return {
      id: values._id,
      modelName: values.model_name,
      makeId: values.make_id,
      active: values.active,
      createdAt: values.created_at,
      updatedAt: values.updated_at,
      yearFounded: values.year_founded,
      bodyType: values.body_type,
      make: {
        makeName: values.makes.make_name
      },
    };
  }
}
