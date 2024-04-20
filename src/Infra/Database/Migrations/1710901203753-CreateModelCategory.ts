import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateModelCategory1710901203753 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "model_category",
              columns: [
                {
                  name: "_id",
                  type: "uuid",
                  isPrimary: true,
                  isNullable: false,
                },
                {
                  name: "type",
                  type: "varchar(100)",
                  isNullable: false,
                },
                {
                  name: "created_at",
                  type: "TIMESTAMPTZ",
                  default: "NOW()",
                  isNullable: false,
                },
                {
                  name: "updated_at",
                  type: "TIMESTAMPTZ",
                  isNullable: true,
                },
                {
                  name: "deleted_at",
                  type: "TIMESTAMPTZ",
                  isNullable: true,
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
