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
        ).select("-password") // oculto la contraseña
        if (!userProfile) {
            return res.status(404).json(
                {
                    success: false,
                    message: "User not found"
                }
            )
        }

        res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            data: userProfile
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the user",
            error: error
        })
    }
}

//Actualizar datos
export const updateProfile = async (req, res) => {
    try {

        const userId = req.tokenData.userId;
        const email = req.body.email

        const userProfile = await User.findOneAndUpdate(
            {
                _id: userId
            },
            {
                email: email
            },
            {
                new: true
            }
        )
        
        res.status(200).json({
            success: true,
            message: "User update successfully",
            data: userProfile
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to update the user",
            error: error
        })
    }
}

//ELIMINAR USUARIO
export const deleteUser = async (req, res) => {
    try {

        const userId = req.params.id;

        const removeUser = await User.findByIdAndDelete(userId)

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: removeUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to delete the user",
            error: error
        })
    }
}