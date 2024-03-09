import { Schema, model } from "mongoose";

export const PostSchema = new Schema(
    {
        description: {
            type: String,
            require: false,
        },

        user_id: [ //Relacion. Va dentro de un array porque hay muchos libros favoritos
            {
                type: String,
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