import IPost from '../../../interfaces/IPost';
import IPostRepository from '../../../repositories/interfaces/IPostRepository';

export default class GetPostsService {
  constructor(private postRepository: IPostRepository) {}

  public async execute(): Promise<IPost[]> {
    const posts = await this.postRepository.findPosts();

    const postsList = posts.map((post) => ({
      ...post,
      author: { name: post.author.name },
    }));

    return postsList;
  }
}
