import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddBodyTypeToNodels1708200464708 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('models', new TableColumn({
            name: 'body_type',
            isNullable:true,
            type:'varchar(100)',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('models', 'body_type')
    }

}
