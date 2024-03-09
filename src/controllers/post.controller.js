export const createPosts = async (req, res) => {
    try {

        res.status(200).json({
            success: true,
            message: "Posts retrieved successfully",
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the posts",
            error: error
        })
    }
}