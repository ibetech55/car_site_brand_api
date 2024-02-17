import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateMakesTable1701468315273 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "makes",
              columns: [
                {
                  name: "_id",
                  type: "uuid",
                  isPrimary: true,
                  isNullable: false,
                },
                {
                  name: "make_name",
                  type: "varchar(100)",
                  isNullable: false,
                },
                {
                  name: "origin",
                  type: "varchar(100)",
                  isNullable: false,
                },
                {
                  name: "make_logo",
                  type: "varchar(100)",
                  isNullable: true,
                },
                {
                  name: "active",
                  type: "bool",
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
        await queryRunner.dropTable('makes')
    }

}
