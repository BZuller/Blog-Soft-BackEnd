import { getCustomRepository } from 'typeorm';
import PostRepository from '../../../repositories/implementations/PostRepository';
import IDeletePostRequestDTO from './IDeletePostRequestDTO';

export default class DeletePostService {
  public async execute(data: IDeletePostRequestDTO) {
    const postRepository = getCustomRepository(PostRepository);
    const { id } = data;
    postRepository.deletePost(id);
  }
}
