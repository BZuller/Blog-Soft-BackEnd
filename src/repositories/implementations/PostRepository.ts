import { EntityRepository, getRepository } from 'typeorm';
import Post from '../../database/entities/Post.Entity';
import User from '../../database/entities/User.Entity';
import IPostModel from '../../models/IPostModel';
import ApiError from '../../utils/apiError.utils';
import IPostRepository from '../interfaces/IPostRepository';

@EntityRepository(Post)
export default class PostRepository implements IPostRepository {
  private postRepository = getRepository(Post);

  private userRepository = getRepository(User);

  async createPost(post: IPostModel): Promise<string | undefined> {
    const { title, authorId, content, categorie } = post;
    const user = await this.userRepository.findOne({ id: authorId });
    if (!user) {
      throw new Error('Api Error');
    }
    const newPost = this.postRepository.create({
      title,
      author: user,
      content,
      categorie,
    });

    await this.postRepository.save(newPost);

    return newPost.id;
  }

  async deletePost(id: string): Promise<Post | null> {
    const post = await this.postRepository.findOne(id);

    if (!post) {
      throw new ApiError(404, true, 'User not found');
    }

    await this.postRepository.remove(post);

    return post;
  }
}
