

import {PostModel as IPostModel} from '../model/interfaces/PostModel'
import {PostSchema} from '../dataAccess/schemas/PostSchema'
import {BaseRepository} from './BaseRepository'

export  class PostRepository  extends BaseRepository<IPostModel> {
    constructor () {
        super(PostSchema);
    }
}
