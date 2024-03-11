import Post from "../models/Post.js";
import User from "../models/User.js";

//CREAR POST
export const createPosts = async (req, res) => {
    try {
        const description = req.body.description;
        const userId = req.tokenData.userId

        if (!description) {
            return res.status(404).json({
                success: false,
                message: "Description is necessary"
            })
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
        res.status(500).json({
            success: false,
            message: "It is not possible to create the posts",
            error: error
        })
    }
}

//ELIMINAR POST
export const deletePosts = async (req, res) => {
    try {

        const userId = req.tokenData.userId
        const postId = req.params.id;

        //añadir validacion de que lo elimina el creador del post
        // const post = await Post.findById(postId)

        // if(userId !== post.userId) {
        //     return res.status(400) (
        //         {
        //             success:false,
        //             message:"You cant delete the post"
        //         }
        //     )
        // }

        const postRemove = await Post.deleteOne(

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
        res.status(500).json({
            success: false,
            message: "It is not possible to delete the posts",
            error: error
        })
    }
}



//ACTUALIZAR POST

export const updatePosts = async (req, res) => {
    try {


        const userId = req.tokenData.userId;
        const postId = req.params.id
        const description = req.body.description

        //Validacion para que lo actualice el dueño del post

        // const post = await Post.findById(postId)

        // if(userId !== post.postId){
        //     return res.status(400).json({
        //         succes:false,
        //         message:"You cant update the post"
        //     })
        // }

        const postUpdate = await Post.updateOne(
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
        res.status(500).json({
            success: false,
            message: "It is not possible to update the post",
            error: error
        })
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
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the posts",
            error: error
        })
    }
}

//RECUPERAR POST POR ID
export const getPostById = async (req, res) => {
    try {

        const postId = req.params.id

        const recoverPost = await Post.findById(postId)

        res.status(200).json({
            success: true,
            message: "Post retrieved successfully",
            data: recoverPost
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the post",
            error: error
        })
    }
}

//RECUPERAR MIS POSTS
export const getMyPosts = async (req, res) => {
    try {

        const userId = req.tokenData.userId;

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
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the posts",
            error: error
        })
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
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the posts",
            error: error
        })
    }
}

//DAR Y QUITAR LIKE A UN POST
export const addLike = async (req, res) => {
    try {

        const userId = req.tokenData.userId;
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
            post.like.pop(userId);
            await post.save();

            return res.status(200).json({
                success: true,
                message: "Like removed"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to added the like",
            error: error
        })
    }
}
