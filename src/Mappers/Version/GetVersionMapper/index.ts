import { GetVersionDto } from "../../../Data/Version/GetVersionDto";
import { Versions } from "../../../Entities/versions";

export class GetVersionMapper {
  map(values: Versions): GetVersionDto {
    return {
      id: values._id,
      versionName: values.version_name,
      modelId: values.model_id,
      description: values.description,
      active: values.active,
      createdAt: values.created_at,
      model: {
        modelName: values.models.model_name,
        make: {
          makeId: values.models.makes._id,
          makeName: values.models.makes.make_name,
        },
      },
    };
  }
}
