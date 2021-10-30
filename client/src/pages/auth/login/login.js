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
import { ApiService } from "../../../api.services";
import Background from "../../../assets/images/bg2.jpg";

import { useStyles } from "./styles";

const validate = (email, password) => {
	let validationComplete = false;
	if (!email || !password) {
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

export const Login = () => {
	const classes = useStyles();

	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validation = validate(
			email,
			password,
		);
		if (validation === true) {
			const result = {
				email: email.trim(),
				password,
			};
			try {
				const res = await ApiService.login(result);
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
						Welcome Back!
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
							Login
						</Button>
					</form>
					<Typography variant="body2">
						Don&rsquo;t have an account?&nbsp;
						<Link href="/register" variant="body2">
							Register
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
