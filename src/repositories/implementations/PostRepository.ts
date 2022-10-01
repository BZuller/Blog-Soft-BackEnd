import { EntityRepository, getRepository } from 'typeorm';
import Post from '../../database/entities/Post.Entity';
import IPost from '../../interfaces/IPost';
import IPostRepository from '../interfaces/IPostRepository';

@EntityRepository(Post)
export default class PostRepository implements IPostRepository {
  private repository = getRepository(Post);

  async create(post: IPost): Promise<string | undefined> {
    const newPost = this.repository.create(post);

    return newPost.id;
  }
}
