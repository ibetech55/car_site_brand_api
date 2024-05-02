import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddModelCategoryIdtoModel1714433000235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "models",
            new TableColumn({
              name: "model_category_id",
              isNullable: true,
              type: "uuid",
            })
          );

          await queryRunner.createForeignKey('models', new TableForeignKey({
            columnNames:['model_category_id'],
            referencedColumnNames:['_id'],
            referencedTableName: 'model_categories'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("models", "model_category_id");
        await queryRunner.dropForeignKey('models', 'model_category_id')
    }

}
