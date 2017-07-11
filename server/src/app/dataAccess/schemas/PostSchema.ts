
import {DataAccess} from '../DataAccess'
import {PostModel as IPostModel} from '../../model/interfaces/PostModel'

export const PostSchema =  DataAccess.mongooseConnection.model<IPostModel>("Posts", DataAccess.mongooseInstance.Schema({
    name : {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    }
}));
