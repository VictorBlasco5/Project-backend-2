import User from "../models/User.js"


//VER TODOS LOS USUARIOS
export const getUsers = async (req, res) => {
    try {

        const users = await User.find().select("-password")
            
        res.status(200).json({
            success: true,
            message: "users retrieved successfully",
            data: users
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the users",
            error: error
        })
    }
}

//VER PERFIL DE USUARIO
export const getUserProfile = async (req, res) => {
    try {

        const userId = req.tokenData.userId

        const userProfile = await User.find(
            {
                _id: userId
            }
        ).select("-password")

       if(!userProfile) {
        return res.status(404).json(
            {
                success: false,
                message: "User not found"
            }
        )
       }

        res.status(200).json({
            success: true,
            message: "users retrieved successfully",
            data: userProfile
          
            
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the users",
            error: error
        })
    }
}