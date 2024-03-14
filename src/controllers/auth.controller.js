import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken"
import { handleError } from "../utils/handleError.js";

export const register = async (req, res) => {
	try {
		// const name = req.body.name
		// const email = req.body.email
		// const password = req.body.password
		const { name, email, password } = req.body;

		if (!name) {
			// return res.status(400).json(
			// 	{
			// 		success: false,
			// 		message: "Enter a name"
			// 	}
			// )
			throw new Error('Enter a name')
		}

		if (password.length < 6 || password.length > 10) {
			// return res.status(400).json({
			//     success: false,
			//     message: "Password must contain between 6 and 10 characters"
			// })
			throw new Error('Password must contain between 6 and 10 characters')
		}

		const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
		if (!validEmail.test(email)) {
			// return res.status(400).json(
			//     {
			//         success: false,
			//         message: "format email invalid"
			//     }
			// )
			throw new Error('Format email invalid')
		}
		const passwordEncrypted = bcrypt.hashSync(password, 5)

		const newUser = await User.create(
			{
				name: name,
				email: email,
				password: passwordEncrypted
			}
		)

		res.status(201).json({
			success: true,
			message: "User registered succesfully",
			data: newUser
		})
	} catch (error) {
		// res.status(500).json({
		//     success: false,
		//     message: "User cant be registered",
		//     error: error
		// })
		if (error.message === 'Password must contain between 6 and 10 characters') {
			return handleError(res, error.message, 404)
		}
		if (error.message === 'Format email invalid') {
			return handleError(res, error.message, 404)
		}
		if (error.message === 'Enter a name') {
			return handleError(res, error.message, 404)
		}

		handleError(res, "User cant be registered", 500)
	}
}

export const login = async (req, res) => {
	try {
		// const email = req.body.email;
		// const password = req.body.password;
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "email and password are mandatories",
			});
		}

		const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
		if (!validEmail.test(email)) {
			return res.status(400).json({
				success: false,
				message: "Email format is not valid",
			});
		}

		const user = await User.findOne({
			email: email,
		});

		console.log(user);

		if (!user) {
			res.status(400).json({
				success: false,
				message: "Email or password invalid",
			});
		}

		const isValidPassword = bcrypt.compareSync(password, user.password);

		if (!isValidPassword) {
			return res.status(400).json({
				success: false,
				message: "Email or password invalid",
			});
		}

		const token = jwt.sign(
			{
				userId: user._id,
				roleName: user.role,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: "2h",
			}
		);

		res.status(200).json({
			success: true,
			message: "User logged succesfully",
			token: token
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "User cant be logged",
			error: error,
		});
	}
};
