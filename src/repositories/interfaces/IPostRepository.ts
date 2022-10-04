import Post from '../../database/entities/Post.Entity';
import ICreatePostDTO from '../../services/Posts/createPostService/ICreatePostRequestDTO';

export default interface IPostRepository {
  createPost(post: ICreatePostDTO): Promise<string | undefined>;
  deletePost(id: string): Promise<Post | null>;
  findPosts(): Promise<Post[]>;
}
