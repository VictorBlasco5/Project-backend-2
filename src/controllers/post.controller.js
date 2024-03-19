import Post from "../models/Post.js";
import { handleError } from "../utils/handleError.js";

//CREAR POST
export const createPosts = async (req, res) => {
    try {
        const { description } = req.body;
        const { userId } = req.tokenData;

        if (!description) {
            throw new Error('Description is necessary')
        }

        const newPost = await Post.create(
            {
                description: description,
                userId: userId
            }
        )

        res.status(200).json({
            success: true,
            message: "Posts created successfully",
            data: newPost
        })

    } catch (error) {
        if (error.message === 'Description is necessary') {
            return handleError(res, error.message, 404)
        }
        handleError(res, "It is not possible to create the posts", 500)
    }
}

//ELIMINAR POST
export const deletePosts = async (req, res) => {
    try {
        const { userId } = req.tokenData;
        const postId = req.params.id;

        // validacion de que lo elimina el creador del post
        const post = await Post.findById(postId)

        if (userId !== post.userId) {
            throw new Error('You cant delete the post')
        }

        const postRemove = await Post.findByIdAndDelete(
            {
                _id: postId
            }
        )

        res.status(200).json({
            success: true,
            message: "Posts deleted successfully",
            data: postRemove
        })

    } catch (error) {
        if (error.message === 'You cant delete the post') {
            return handleError(res, error.message, 404)
        }
        handleError(res, "It is not possible to delete the post", 500)
    }
}

//ACTUALIZAR POST
export const updatePosts = async (req, res) => {
    try {
        const { userId } = req.tokenData;
        const postId = req.params.id;
        const { description } = req.body;

        //Validacion para que lo actualice el dueño del post
        const post = await Post.findById(postId)

        if (userId !== post.userId) {
            throw new Error('You cant update the post')
        }

        const postUpdate = await Post.findByIdAndUpdate(
            {
                _id: postId
            },
            {
                description: description
            },
            {
                new: true
            }
        )

        res.status(200).json({
            success: true,
            message: "Post update successfully",
            data: postUpdate
        })

    } catch (error) {
        if (error.message === 'You cant update the post') {
            return handleError(res, error.message, 404)
        }
        handleError(res, "It is not possible to update the post", 500)
    }
}

//RECUPERAR TODOS LOS POSTS
export const getPosts = async (req, res) => {
    try {
        const allPosts = await Post.find()

        res.status(200).json({
            success: true,
            message: "Posts retrieved successfully",
            data: allPosts
        })

    } catch (error) {
        handleError(res, "It is not possible to recover the posts", 500)
    }
}

//RECUPERAR POST POR ID
export const getPostById = async (req, res) => {
    try {
        const postId = req.params.id;

        const recoverPost = await Post.findById(postId)

        res.status(200).json({
            success: true,
            message: "Post retrieved successfully",
            data: recoverPost
        })

    } catch (error) {
        handleError(res, "It is not possible to recover the post", 500)
    }
}

//RECUPERAR MIS POSTS
export const getMyPosts = async (req, res) => {
    try {
        const { userId } = req.tokenData;

        const myPosts = await Post.find(
            {
                userId
            }
        )

        console.log(myPosts)

        res.status(200).json({
            success: true,
            message: "Posts retrieved successfully",
            data: myPosts
        })
    } catch (error) {
        handleError(res, "It is not possible to recover the posts", 500)
    }
}

//RECUPERAR LOS POSTS DE UN USUARIO
export const getPostsOfUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const postsUser = await Post.find(
            {
                userId
            }
        )

        res.status(200).json({
            success: true,
            message: "Posts retrieved successfully",
            data: postsUser
        })
    } catch (error) {
        handleError(res, "It is not possible to recover the posts", 500)
    }
}

//DAR Y QUITAR LIKE A UN POST
export const addLike = async (req, res) => {
    try {
        const { userId } = req.tokenData;
        const postId = req.params.id;

        const post = await Post.findById(
            {
                _id: postId
            }
        )

        const user = await Post.findOne(
            {
                like: userId
            }
        )

        if (!user) {
            post.like.push(userId);
            await post.save();

            return res.status(200).json({
                success: true,
                message: "Like added"
            })
        }

        if (user) {
            post.like.pull(userId);
            await post.save();

            return res.status(200).json({
                success: true,
                message: "Like removed"
            })
        }

    } catch (error) {
        handleError(res, "It is not possible to added the like", 500)
    }
}
