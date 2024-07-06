import { Between, FindOperator, ILike } from "typeorm";
export interface IFieldData {
  key: string;
  field: string;
  field2?: string;
}
export class HandleQuery {
  constructor() {}

  handleBetweenDates(startDate: string, endDate: string): FindOperator<string> {
    try {
      return startDate && endDate
        ? Between(
            new Date(`${startDate}T00:00:00.000Z`).toISOString(),
            new Date(`${endDate}T23:59:59.999Z`).toISOString()
          )
        : undefined;
    } catch (error) {
      console.log(error);
    }
  }

  handleILike(text: string): FindOperator<string> {
    return text ? ILike(`%${text}%`) : undefined;
  }

  handlePagination(page: number, limit: number) {
    return {
      take: limit,
      skip: page && limit ? (page - 1) * limit : undefined,
    };
  }

  handleOrderBy<T, P>(values: T, field: IFieldData[]): P {
    let orderByData = {};
    if (values && field) {
      Object.keys(values).map((key) => {
        const fieldData:IFieldData = field.find((f: IFieldData) => f.key === key);
        try {
          if (!fieldData.hasOwnProperty('field2')) {
            orderByData[fieldData.field] = values[key];
          } else {
            orderByData[fieldData.field] = { [fieldData.field2]: values[key] };
          }
        } catch (error) {
          console.log(error);
        }
      });
      return orderByData as P;
    }
    return undefined;
  }
}
