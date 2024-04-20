import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddModelCategoryIdtoModel1710901300817
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "models",
      new TableColumn({
        name: "model_category_id",
        isNullable: true,
        type: "uuid",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("models", "model_category_id");
  }
}
