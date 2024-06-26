import { Between, FindOperator, ILike } from "typeorm";
export interface IFieldData {
  name:string,
  field: string;
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

  handleOrderBy<T>(values:T, field:IFieldData[]) {
    let orderByData = {};

    if (values) {
      Object.keys(values).map((key) => {
        const fieldData = field.find((f:IFieldData) => f.name === key);
        orderByData[fieldData.field] = values[key];
      });
      return orderByData;
    }
    return undefined;
  }
}
