import React from "react";

import {
	Button,
	createTheme, FormControl,
	IconButton, InputAdornment,
	InputLabel, OutlinedInput,
	TextField, ThemeProvider,
} from "@material-ui/core";
import { ArrowRight, Visibility, VisibilityOff } from "@material-ui/icons";
import styles from "./style.module.css";

import Background from "../../../assets/images/bg2.jpg";
import logo from "../../../assets/images/logo.png";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ff934d",
		},
		secondary: {
			main: "#3e6cca",
		},
	},
});

export const Login = () => {
	const [values, setValues] = React.useState({
		rollno: "",
		password: "",
		showPassword: false,
	});
	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<div className={styles.container}>
			<img className={styles.background} src={Background} alt="bgimg" />
			<ThemeProvider theme={theme}>
				<div className={styles.logincontainer}>
					<img className={styles.logo} src={logo} alt="logo" />
					<div className={styles.login}>
						<h1>
							<span>Welcome</span>
							<br />
							Back
						</h1>
						<TextField
							className={styles.textfield}
							id="outlined-basic"
							label="Roll Number"
							variant="outlined"
							size="medium"
							color="secondary"
							onChange={handleChange("rollno")}
							value={values.rollno}
							fullWidth
						/>
						<FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
							<InputLabel htmlFor="outlined-adornment-password" color="secondary">Password</InputLabel>
							<OutlinedInput
								className={styles.password}
								id="outlined-adornment-password"
								type={values.showPassword ? "text" : "password"}
								value={values.password}
								color="secondary"
								onChange={handleChange("password")}
								endAdornment={(
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								)}
								label="Password"
							/>
						</FormControl>
						<Button
							className={styles.button}
							variant="contained"
							size="large"
							color="secondary"
						>
							Login
						</Button>
						<div className={styles.register}>
							<span>
								Register
								<ArrowRight fontSize="large" />
							</span>
						</div>
					</div>
				</div>
			</ThemeProvider>
		</div>
	);
};

export default Login;
