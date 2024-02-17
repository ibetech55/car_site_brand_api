import { GetCarListDto, IGetCarList } from "../../../Data/Make/GetCarListDto";

export class GetCarListMapper {
  map(values: IGetCarList): GetCarListDto {
    return {
      id: values._id,
      makeName: values.make_name
    }
  }
}
