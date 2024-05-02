import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddYearFoundedToModels1714667688362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "models",
            new TableColumn({
              name: "year_founded",
              isNullable: true,
              type: "INT",
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('models', 'year_founded');
    }

}
