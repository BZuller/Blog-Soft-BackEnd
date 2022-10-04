import { EntityRepository, getRepository } from 'typeorm';
import Categories from '../../database/entities/Categories.Entity';
import Post from '../../database/entities/Post.Entity';
import User from '../../database/entities/User.Entity';
import ICreatePostDTO from '../../services/Posts/createPostService/ICreatePostRequestDTO';
import ApiError from '../../utils/apiError.utils';
import IPostRepository from '../interfaces/IPostRepository';

@EntityRepository(Post)
export default class PostRepository implements IPostRepository {
  async createPost(post: ICreatePostDTO): Promise<string | undefined> {
    const postRepository = getRepository(Post);
    const categorieRepository = getRepository(Categories);
    const userRepository = getRepository(User);

    const { title, authorId, content, categorieId } = post;

    const categorie = await categorieRepository.findOne({
      id: categorieId,
    });
    if (!categorie) {
      throw new Error('Api Error');
    }

    const user = await userRepository.findOne({ id: authorId });
    if (!user) {
      throw new Error('Api Error');
    }

    const newPost = postRepository.create({
      title,
      author: user,
      content,
      categorie,
    });
    await postRepository.save(newPost);

    return newPost.id;
  }

  async deletePost(id: string): Promise<Post | null> {
    const postRepository = getRepository(Post);
    const post = await postRepository.findOne(id);

    if (!post) {
      throw new ApiError(404, true, 'User not found');
    }

    await postRepository.remove(post);

    return post;
  }

  async findPosts(): Promise<Post[]> {
    const postRepository = getRepository(Post);
    const postsList = await postRepository.find();

    return postsList;
  }
}
