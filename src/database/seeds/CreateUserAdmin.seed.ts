import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import UserRole from '../../enums/UserRoles';
import User from '../entities/User.Entity';

export default class CrateUser implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    const rows = await connection.getRepository(User).count();
    if (rows <= 0) {
      await connection
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
          {
            name: 'Admin',
            email: 'admin@admin.com',
            username: 'admin',
            password: 'admin',
            role: UserRole.ADMIN,
          },
        ])
        .execute();
    }
  }
}
