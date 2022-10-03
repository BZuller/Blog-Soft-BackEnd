import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AssignPosttoUser1664748573981 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'posts',
      new TableForeignKey({
        name: 'UserPost',
        columnNames: ['authorId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('posts', 'UserPost');
  }
}
