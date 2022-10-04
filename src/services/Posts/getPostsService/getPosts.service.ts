import IPost from '../../../interfaces/IPost';
import IPostRepository from '../../../repositories/interfaces/IPostRepository';

export default class GetPostsService {
  constructor(private postRepository: IPostRepository) {}

  public async execute(): Promise<IPost[]> {
    const postsList = await this.postRepository.findPosts();

    return postsList;
  }
}
