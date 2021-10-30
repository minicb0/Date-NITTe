import React, { useState } from "react";
import {
	Button,
	TextField,
	Typography,
	Container,
	Grid,
	InputAdornment,
	IconButton,
	Link,
} from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApiService } from "../../../api.services";
import Background from "../../../assets/images/bg2.jpg";

import { useStyles } from "./styles";

const validate = (name, email, password) => {
	let validationComplete = false;
	if (!name || !email || !password) {
		if (!name) {
			toast.error("Name field is empty!");
		}
		if (!email) {
			toast.error("Email field is empty");
		}
		if (!password) {
			toast.error("Password field is empty");
		}
	} else {
		validationComplete = true;
	}
	return validationComplete;
};

export const Register = () => {
	const classes = useStyles();

	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validation = validate(
			name,
			email,
			password,
		);
		if (validation === true) {
			const result = {
				name: name.trim(),
				email: email.trim(),
				password,
			};
			try {
				const res = await ApiService.register(result);
				toast.success(res.data.message);
			} catch (err) {
				toast.error(err.response.data.message);
			}
		}
	};

	return (

		<Container
			component="main"
			maxWidth="xs"
		>
			<img src={Background} className={classes.bgimg} alt="bgimg" />

			<div className={classes.paper}>
				<Grid
					className={classes.form}
					container
					spacing={5}
					direction="column"
					justifyContent="center"
					alignItems="center"
				>

					<Typography component="h1" variant="h4" className={classes.heading}>
						Create an account
					</Typography>
					<form>
						<Grid
							className={classes.inputfields}
							container
							// direction="column"
							justifyContent="space-evenly"
							// alignItems="flex-end"
						>
							<TextField
								size="small"
								color="secondary"
								variant="outlined"
								margin="normal"
								required
								fullWidth
								value={name}
								onChange={(e) => setName(e.target.value)}
								id="name"
								label="Name"
								name="name"
							/>

							<TextField
								size="small"
								color="secondary"
								variant="outlined"
								margin="normal"
								required
								fullWidth
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								id="email"
								label="Email"
								name="email"
								type="email"
							/>

							<TextField
								size="small"
								color="secondary"
								variant="outlined"
								margin="normal"
								required
								type={showPassword ? "text" : "password"}
								fullWidth
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								name="password"
								label="Password"
								id="password"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												style={{ width: 32, height: 32 }}
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
											// onMouseDown={handleMouseDownPassword}
											>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>

						</Grid>

						<Button
							aria-label="submit"
							type="submit"
							variant="text"
							className={classes.submit}
							onClick={(e) => handleSubmit(e)}
						>
							REGISTER
						</Button>
					</form>
					<Typography variant="body2">
						Already have an account?&nbsp;
						<Link href="/login" variant="body2">
							Login
						</Link>
					</Typography>
				</Grid>
			</div>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</Container>

	);
};
