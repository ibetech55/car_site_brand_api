import {
  GetVersionsByModelIdDto,
  IModelData,
  ModelDataDto,
} from "../../../Data/Version/GetVersionDto";
import { Models } from "../../../Entities/models";
import { Versions } from "../../../Entities/versions";

export class GetVersionsByModelIdMapper {
  constructor() {}

  map(values: Versions[], modelData: Models): GetVersionsByModelIdDto {
    return {
      versions: values.map((x: Versions) => ({
        id: x._id,
        versionName: x.version_name,
        modelId: x.model_id,
        active: x.active,
        description: x.description,
        createdAt: x.created_at,
      })),
      model: {
        modelName: modelData.model_name,
        make: {
          makeName: modelData.makes.make_name,
          makeId: modelData.makes._id,
        },
      },
    };
  }
}
