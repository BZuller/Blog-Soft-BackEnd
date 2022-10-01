import IPost from '../../interfaces/IPost';

export default interface IPostRepository {
  create(post: IPost): Promise<string | undefined>;
}
