import { Schema, model } from "mongoose";

export const PostSchema = new Schema(
    {
        description: {
            type: String,
            require: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User', 
            require: true
        },
        image: {
            type: String,
            required: true
        },
        like: [ //Relacion. Va dentro de un array porque hay muchos likes en un post
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Post = model('Post', PostSchema)

export default Post