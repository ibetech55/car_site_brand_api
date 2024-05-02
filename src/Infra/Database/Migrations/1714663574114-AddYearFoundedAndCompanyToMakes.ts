import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddYearFoundedAndCompanyToMakes1714663574114
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "makes",
      new TableColumn({
        name: "year_founded",
        isNullable: true,
        type: "INT",
      })
    );

    await queryRunner.addColumn(
      "makes",
      new TableColumn({
        name: "company",
        isNullable: true,
        type: "VARCHAR(100)",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("makes", "year_founded");
    await queryRunner.dropColumn("makes", "company");
  }
}
