import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AssignPosttoCategorie1664821071618 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'posts',
      new TableForeignKey({
        name: 'PostCategorie',
        columnNames: ['categorieId'],
        referencedTableName: 'categories',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('posts', 'PostCategorie');
  }
}
