import { GetMakeDto } from "../../../Data/Make/GetMakeDto";
import { Makes } from "../../../Entities/makes";

export class GetMakeMapper {
  map(values: Makes): GetMakeDto {
    return {
      id: values._id,
      makeName: values.make_name,
      origin: values.origin,
      makeLogo: values.make_logo,
      active: values.active,
      company: values.company,
      yearFounded: values.year_founded,
      createdAt: values.created_at,
      updatedAt: values.updated_at
    };
  }
}
