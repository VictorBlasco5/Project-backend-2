import Post from "../models/Post.js";

//CREAR POST
export const createPosts = async (req, res) => {
    try {

        const description = req.body.description;
        const userId = req.tokenData.user_id

        if (!description) {
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
            message: "Post retrieved successfully",
            data: allPosts
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the post",
            error: error
        })
    }
}