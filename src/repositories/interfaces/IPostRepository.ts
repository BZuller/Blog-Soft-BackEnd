import ICreatePostDTO from '../../services/Posts/createPostService/ICreatePostRequestDTO';

export default interface IPostRepository {
  createPost(post: ICreatePostDTO): Promise<string | undefined>;
}
