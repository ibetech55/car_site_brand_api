import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVersionTable1701822085448 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "versions",
        columns: [
          {
            name: "_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "version_name",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "model_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "description",
            type: "text",
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
        foreignKeys: [
          {
            columnNames: ["model_id"],
            referencedColumnNames: ["_id"],
            referencedTableName: "models",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("versions");
  }
}
