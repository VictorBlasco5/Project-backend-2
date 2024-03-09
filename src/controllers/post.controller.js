import Post from "../models/Post.js";

export const createPosts = async (req, res) => {
    try {

        const description = req.body.description;
        const userId = req.tokenData.user_id

        if(!description) {
            return res.status(404).json({
                success: false,
                message: "Description is necessary"
            })
        }

        const newPost = await Post.create(
            {
                description: description,
                user_id: userId
            }
        )

        res.status(200).json({
            success: true,
            message: "Posts created successfully",
            data: newPost
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to create the posts",
            error: error
        })
    }
}