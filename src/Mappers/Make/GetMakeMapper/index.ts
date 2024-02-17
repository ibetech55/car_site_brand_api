import { GetCarListDto, IGetCarList } from "../../../Data/Make/GetCarListDto";
import { GetMakeDto, IGetMake } from "../../../Data/Make/GetMakeDto";

export class GetMakeMapper {
  map(values: IGetMake): GetMakeDto {
    return {
      id: values._id,
      makeName: values.make_name,
      origin: values.origin,
      makeLogo: values.make_logo,
      active: values.active,
      createdAt: values.created_at,
    };
  }
}
