import { getCustomRepository } from 'typeorm';
import PostRepository from '../../../repositories/implementations/PostRepository';
import UserRepository from '../../../repositories/implementations/UserRepository';
import ICreatePostDTO from './ICreatePostRequestDTO';

export default class CreatePostService {
  public async execute(data: ICreatePostDTO): Promise<string | undefined> {
    const postRepository = getCustomRepository(PostRepository);
    const userRepository = getCustomRepository(UserRepository);
    const { title, content, authorId, categorieId } = data;
    const user = await userRepository.findById(authorId);
    if (!user) {
      throw new Error('This user dont exists');
    }

    const newPost = postRepository.createPost({
      title,
      content,
      categorieId,
      authorId,
    });

    return newPost;
  }
}
