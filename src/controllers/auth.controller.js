import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken"
import { handleError } from "../utils/handleError.js";

export const register = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		if (!name) {
			throw new Error('Enter a name')
		}

		if (password.length < 7 || password.length > 12) {
			throw new Error('Password must contain between 7 and 12 characters')
		}

		const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
		if (!validEmail.test(email)) {
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
		const { email, password } = req.body;

		if (!email || !password) {
			throw new Error('Email and password are mandatories')
		}

		const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
		if (!validEmail.test(email)) {
			throw new Error('Email format is not valid')
		}

		const user = await User.findOne({
			email: email,
		});

		if (!user) {
			throw new Error('Email or password invalid')
		}

		const isValidPassword = bcrypt.compareSync(password, user.password);

		if (!isValidPassword) {
			throw new Error('Email or password invalid')
		}

		const token = jwt.sign(
			{
				userId: user._id,
				roleName: user.role,
				name: user.name,
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
		if (error.message === 'Email and password are mandatories') {
			return handleError(res, error.message, 404)
		}
		if (error.message === 'Email format is not valid') {
			return handleError(res, error.message, 404)
		}
		if (error.message === 'Email or password invalid') {
			return handleError(res, error.message, 404)
		}
		handleError(res, "User cant be registered", 500)
	}
};
