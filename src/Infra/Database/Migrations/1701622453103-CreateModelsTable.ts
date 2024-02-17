import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateModelsTable1701622453103 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "models",
        columns: [
          {
            name: "_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "model_name",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "make_id",
            type: "uuid",
            isNullable: false,
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
        foreignKeys:[
            {
              columnNames:['make_id'],
              referencedColumnNames:['_id'],
              referencedTableName:'makes'
            }
          ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('models')
  }
}
