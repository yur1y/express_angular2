
import * as mongoose from 'mongoose'

export interface PostModel extends mongoose.Document {
    text: string;
    tags: string[];
    name: string;
}
