import User from "../models/User.js"

export const getUsers = async (req, res) => {
    try {

        const users = await User.find().select("-password")
            
        res.status(200).json({
            success: true,
            message: "users retrieved successfully",
            data: users
        })

    } 
    catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the users",
            error: error
        })
    }
}