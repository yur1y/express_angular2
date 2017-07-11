
import {PostRepository} from '../repository/PostRepository'
import {PostModel as IPostModel} from '../model/interfaces/PostModel'
import {PostBusiness as IPostBusiness} from './interfaces/PostBusiness'

export class PostBusiness implements IPostBusiness {
    private postRepository: PostRepository;

    constructor () {
        this.postRepository = new PostRepository();
    }

    create (item: IPostModel, callback: (error: any, result: any) => void) {
        this.postRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this.postRepository.retrieve(callback);
    }

    update (_id: string, item: IPostModel, callback: (error: any, result: any) => void) {

        this.postRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this.postRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this.postRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IPostModel) => void) {
        this.postRepository.findById(_id, callback);
    }

}

