import User from "../models/User.js"
import { handleError } from "../utils/handleError.js";

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
        handleError(res, "It is not possible to recover the users", 500)
    }
}

//VER PERFIL DE USUARIO
export const getUserProfile = async (req, res) => {
    try {
        const { userId } = req.tokenData;

        const userProfile = await User.find(
            {
                _id: userId
            }
        ).select("-password") // oculto la contraseña

        if (!userProfile) {
            throw new Error('User not found')
        }

        res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            data: userProfile
        })

    } catch (error) {
        if (error.message === 'User not found') {
            return handleError(res, error.message, 404)
        }
        handleError(res, "It is not possible to recover the user", 500)
    }
}

//Actualizar datos
export const updateProfile = async (req, res) => {
    try {
        const { userId } = req.tokenData;
        const { email } = req.body;
        const { name } = req.body;

        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            throw new Error('Format email invalid')
        }

        const userProfile = await User.findOneAndUpdate(
            {
                _id: userId
            },
            {
                name:name
            },
            {
                new: true
            }
        ).select("-password")

        res.status(200).json({
            success: true,
            message: "User update successfully",
            data: userProfile
        })

    } catch (error) {
        if (error.message === 'Format email invalid') {
            return handleError(res, error.message, 400)
        }
        handleError(res, "It is not possible to update the user", 500)
    }
}

//ELIMINAR USUARIO
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const removeUser = await User.findByIdAndDelete(userId).select("-password")

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: removeUser
        })

    } catch (error) {
        handleError(res, "It is not possible to delete the user", 500)
    }
}

//CAMBIO DE ROLE
export const updateRole = async (req, res) => {
    try {
        const userId = req.params.id;
        const { role } = req.body;

        const newRole = await User.findByIdAndUpdate(
            {
                _id: userId
            },
            {
                role: role
            },
            {
                new: true
            }
        ).select("-password")

        res.status(200).json({
            success: true,
            message: "Role update successfully",
            data: newRole
        })

    } catch (error) {
        handleError(res, "It is not possible to update the role", 500)
    }
}