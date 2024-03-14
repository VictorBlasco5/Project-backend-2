import { Schema, model } from "mongoose";

export const UserSchema = new Schema(
    {
        id: {
            type: String,
            requiere: true,
            unique: true
        },
        name: {
            type: String,
            require: true,
            unique: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        },
        role: {
            type: String,
            enum: ["user", "admin", "super_admin"],
            default: "user"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = model('User', UserSchema)

export default User