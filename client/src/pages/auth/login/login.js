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
import Background from "../../../assets/images/bg.jpg";

import { useStyles } from "./styles";

export const Login = () => {
	const classes = useStyles();

	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	return (
		<Container
			component="main"
			maxWidth="sm"
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

					<Grid
						className={classes.inputfields}
						container
						direction="column"
						justifyContent="space-evenly"
						alignItems="flex-end"
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

					<Button aria-label="submit" type="submit" variant="text" className={classes.submit}>
						Login
					</Button>
					<Link href="/register" variant="body2">
						Don&rsquo;t have an account? Register
					</Link>
				</Grid>
			</div>

		</Container>

	);
};
