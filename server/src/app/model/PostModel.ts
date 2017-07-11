
import {PostModel as IPostModel} from './interfaces/PostModel'

export class PostModel {

    private postModel: IPostModel;

    constructor(postModel: IPostModel) {
        this.postModel = postModel;
    }
    get name (): string {
        return this.postModel.name;
    }

    get text (): string {
        return this.postModel.text;
    }

    get tags (): string[] {
        return this.postModel.tags;
    }
    
}