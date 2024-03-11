import { Schema, model } from "mongoose";

export const PostSchema = new Schema(
    {
        description: {
            type: String,
            require: true,
        },
        userId: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Post = model('Post', PostSchema)

export default Post