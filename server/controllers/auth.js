import bcrypt from "bcrypt";
import User from "../models/userSchema";

export const loginHandler = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(409).json({
				message: "Please fill all the fields",
			});
		}

		const userLogin = await User.findOne({ email });

		if (userLogin) {
			const isMatch = await bcrypt.compare(password, userLogin.password);
			if (!isMatch) {
				res.status(400).json({
					message: "Invalid Credentials",
				});
			} else {
				res.status(200).json({
					message: "Logged In",
				});
			}
		} else {
			res.status(400).json({
				message: "Invalid Credentials",
			});
		}
	} catch (err) {
		console.log(err);
	}
};

export const registerHandler = async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		res.redirect("/signup");
	}

	try {
		const userExist = await User.findOne({ email });

		if (userExist) {
			return res.status(422).json({
				message: "Email Already Exists",
			});
		}
		const user = new User({ name, email, password });

		const userRegistered = await user.save();

		if (userRegistered) {
			res.status(201).json({
				message: "User Registered Successfully",
			});
		} else {
			res.status(500).json({
				message: "Failed to Register",
			});
		}
	} catch (err) {
		console.log(err);
	}
};
