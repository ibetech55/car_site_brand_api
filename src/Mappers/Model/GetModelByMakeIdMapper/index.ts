import { GetModelsByMakeIdDto, IGetModelsByMakeId } from "../../../Data/Model/GetModelsByMakeIdDto";

export class GetModelsByMakeIdMapper {
  map(values: IGetModelsByMakeId): GetModelsByMakeIdDto {
    return {
      id: values._id,
      modelName: values.model_name,
      makeId: values.make_id,
      active: values.active,
      makes:{
        makeName: values.makes.make_name,
      }
    }
  }
}