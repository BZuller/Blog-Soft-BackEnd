import {
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  Column,
  ManyToOne,
} from 'typeorm';
import Categories from '../../enums/Categories';
import IPost from '../../interfaces/IPost';
// eslint-disable-next-line import/no-cycle
import User from './User.Entity';

@Entity('posts')
export default class Post implements IPost {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  title: string;

  @Column()
  autor: string;

  @ManyToOne(() => User, (user) => user.name)
  public author: User;

  @Column()
  content: string;

  @Column({
    type: 'enum',
    enum: ['ANIME', 'MUSIC', 'GAMES', 'MOVIES'],
    default: '',
  })
  categorie?: Categories | undefined;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
