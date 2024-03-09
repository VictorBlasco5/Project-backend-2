import { Schema, model } from "mongoose";

export const PostSchema = new Schema(
    {
        description: {
            type: String,
            require: true,
        },

        // user_id: [ 
        //     {
        //         type: String,
        //         ref: 'User'
        //     }
        // ]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Post = model('Post', PostSchema)

export default Post