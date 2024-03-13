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

        // const userId = req.tokenData.userId
        const {userId} = req.tokenData;

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

        // const userId = req.tokenData.userId;
        // const email = req.body.email
        const {userId} = req.tokenData;
        const {email} = req.body;

        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
		if (!validEmail.test(email)) {
			return res.status(400).json(
			    {
			        success: false,
			        message: "Format email invalid"
			    }
			)
        }

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


        if(userId !== userId.userId) {
			return res.status(400).json(
				{
					success: false,
					message: "The user doesnt exist"
				}
			)
		}

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

//CAMBIO DE ROLE
export const updateRole = async (req, res) => {
    try {

        const userId = req.params.id;
        // const role = req.body.role;
        const {role} = req.body;

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
        )

        res.status(200).json({
            success: true,
            message: "Role update successfully",
            data: newRole
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to update the role",
            error: error
        })
    }
}