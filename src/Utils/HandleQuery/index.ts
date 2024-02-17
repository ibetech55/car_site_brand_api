import { Between, FindOperator, ILike } from "typeorm";

export class HandleQuery {
  constructor() {}

  handleBetweenDates(startDate: string, endDate: string): FindOperator<string> {
    return startDate && endDate
      ? Between(
          new Date(`${startDate}T00:00:00.000Z`).toISOString(),
          new Date(`${endDate}T23:59:59.999Z`).toISOString()
        )
      : undefined;
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
}
