/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import "date-fns";
import { useHistory } from "react-router-dom";

import {
	Button,
	Typography,
	InputAdornment,
	FormControl,
	InputLabel,
	IconButton,
} from "@material-ui/core";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import NativeSelect from "@material-ui/core/NativeSelect";
import StepLabel from "@mui/material/StepLabel";
import Grid from "@material-ui/core/Grid";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Styles from "./style.module.css";
import completedicon from "../../../assets/images/completed-icon-6.jpg";

const steps = ["Personal Info.", "Set your preference", "Verification"];

const finalSpaceCharacters = [
	{
		id: "Entertainment",
		name: "Entertainment",
	},
	{
		id: "Foods and Travel",
		name: "Foods and Travel",
	},
	{
		id: "Books",
		name: "Books",
	},
	{
		id: "Sports",
		name: "Sports",
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export const Register = () => {
	const classes = useStyles();
	const history = useHistory();

	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [Name, setName] = useState("");
	const [Rollno, setRollNo] = useState("");
	const [UserName, setUserName] = useState("");
	const [Password, setPassword] = useState("");
	const [Gender, setGender] = useState("");
	const [PhoneNo, setPhoneno] = useState();
	const [selectedDate, setSelectedDate] = useState(new Date("2014-01-01"));
	const [ConfirmPassword, setConfirmPassword] = useState("");
	const [Preferrence, setPreferrence] = useState("");
	const [characters, updateCharacters] = useState(finalSpaceCharacters);
	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	const handlegenderChange = (event) => {
		setGender(event.target.value);
	};
	const validat1 = (name, rollno, gender, phoneno, date, password, confirmpassword) => {
		let isvalidated = false;
		let numofvalid = 0;
		const msg = [];
		const isNum = (num) => /^\d+$/.test(num) || /^\d+\.\d+$/.test(num);
		// console.log(name, rollno, gender, phoneno, date, password, confirmpassword);

		if (!/[^a-zA-Z .]/.test(name)) {
			numofvalid += 1;
		} else {
			msg.push("Name must contain only letters");
		}
		if (isNum(rollno)) {
			if (rollno.length === 9) {
				numofvalid += 1;
			} else {
				msg.push("Enter valid Roll No");
			}
		} else {
			msg.push("Roll No must have only numbers");
		}
		if (isNum(phoneno)) {
			if (phoneno.length === 10) {
				numofvalid += 1;
			} else {
				msg.push("Enter valid Phone No");
			}
		} else {
			msg.push("Phone No should only contain numbers");
		}
		if (password.length >= 8) {
			if (password === confirmpassword) {
				numofvalid += 1;
			} else {
				msg.push("Password and Confirm Password are not matching");
			}
		} else {
			msg.push("Your Password should be atleast 8 lettters");
		}
		if (numofvalid === 4) {
			isvalidated = true;
		}
		const obj = {
			isvalidated,
			msg,
		};
		return obj;
	};
	const handleSubmit1 = (e) => {
		e.preventDefault();
		const obj = validat1(Name, Rollno, Gender, PhoneNo, selectedDate, Password, ConfirmPassword);
		const { isvalidated } = obj;
		const { msg } = obj;
		console.log(isvalidated);
		console.log(msg);
		// if (isvalidated) {
		handleNext();
	// }
	};

	const handleSubmit2 = (e) => {
		e.preventDefault();
		const abc = [];
		characters.map((character) => {
			abc.push(character.name);
		});
		setPreferrence(abc);
		console.log(abc);
		console.log(Preferrence);
		handleNext();
	};
	const handleSubmit3 = (e) => {
		e.preventDefault();
		console.log(Preferrence);
		handleNext();
	};
	// Drag and Drop

	function handleOnDragEnd(result) {
		if (!result.destination) return;

		const items = Array.from(characters);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		updateCharacters(items);
	}

	const renderSwitch = (param) => {
		switch (param) {
		case 0:
			return (
				<form className={Styles.form}>
					<TextField
						size="small"
						color="secondary"
						variant="outlined"
						margin="normal"
						required
						fullWidth
						value={Name}
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
						value={Rollno}
						onChange={(e) => setRollNo(e.target.value)}
						id="RollNo"
						label="RollNo"
						name="RollNo"
						type="RollNo"
					/>

					<TextField
						size="small"
						color="secondary"
						variant="outlined"
						margin="normal"
						required
						fullWidth
						value={UserName}
						onChange={(e) => setUserName(e.target.value)}
						id="UserName"
						label="User Name"
						name="UserName"
						type="UserName"
					/>
					<TextField
						size="small"
						color="secondary"
						variant="outlined"
						margin="normal"
						required
						fullWidth
						value={PhoneNo}
						onChange={(e) => setPhoneno(e.target.value)}
						id="PhoneNo"
						label="PhoneNo"
						name="PhoneNo"
						type="PhoneNo"
						style={{ width: "70%" }}
					/>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="age-native-helper">Gender</InputLabel>
						<NativeSelect
							value={Gender}
							onChange={handlegenderChange}
						>
							<option aria-label="None" value="--Select--" />
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Undefined">Undefined</option>
						</NativeSelect>
					</FormControl>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<Grid container justifyContent="space-around">
							<KeyboardDatePicker
								disableToolbar
								variant="inline"
								format="MM/dd/yyyy"
								margin="normal"
								id="date-picker-inline"
								label="Date of Birth"
								value={selectedDate}
								onChange={handleDateChange}
								KeyboardButtonProps={{
									"aria-label": "change date",
								}}
							/>
						</Grid>
					</MuiPickersUtilsProvider>
					<TextField
						size="small"
						color="secondary"
						variant="outlined"
						margin="normal"
						required
						type={showPassword ? "text" : "password"}
						fullWidth
						value={Password}
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
					<TextField
						size="small"
						color="secondary"
						variant="outlined"
						margin="normal"
						required
						type={showConfirmPassword ? "text" : "password"}
						fullWidth
						value={ConfirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						name="confirmpassword"
						label="Confirm Password"
						id="confirmpassword"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										style={{ width: 32, height: 32 }}
										aria-label="toggle password visibility"
										onClick={handleClickShowConfirmPassword}
										// onMouseDown={handleMouseDownPassword}
									>
										{showConfirmPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</form>
			);
		case 1:
			return (
				<div style={{ textAlign: "left", width: "60%" }}>
					<form>
						<div className="App">
							<header className="App-header">
								<h3 style={{ textAlign: "center" }}>Set your preference</h3>
								<DragDropContext onDragEnd={handleOnDragEnd}>
									<Droppable droppableId="characters">
										{(provided) => (
											<ul
												{...provided.droppableProps}
												ref={provided.innerRef}
											>
												{characters.map(({ id, name }, index) => (
													<Draggable
														key={id}
														draggableId={id}
														index={index}
													>
														{(provided) => (
															<Card
																variant="outlined"
																ref={provided.innerRef}
																{...provided.draggableProps}
																{...provided.dragHandleProps}
															>
																<CardContent className={Styles.list}>
																	<Typography variant="body2" color="text.secondary">
																		{ name }
																	</Typography>
																</CardContent>
															</Card>
														)}
													</Draggable>
												))}
												{provided.placeholder}
											</ul>
										)}
									</Droppable>
								</DragDropContext>
							</header>
						</div>
						{/* <div className={classes.root}>
								<input
									accept="image/*"
									className={classes.input}
									id="contained-button-file"
									multiple
									type="file"
								/>
							<label htmlFor="contained-button-file">
								<Button variant="contained" color="primary" component="span">
									Upload
								</Button>
							</label>
							<input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
							<label htmlFor="icon-button-file">
								<IconButton color="primary" aria-label="upload picture" component="span">
									<PhotoCamera />
								</IconButton>
							</label>
							</div> */}
					</form>
				</div>
			);
		case 2:
			return "verification";
		default:
			return (
				<div style={{ marginTop: "120px" }}>
					<div className={Styles.imagediv}>
						<img src={completedicon} alt="completion_image" className={Styles.completedimage} />
					</div>
					<h1>Register Completed!</h1>
				</div>
			);
		}
	};

	return (
		<div className={Styles.bg}>
			<div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
				<div className={Styles.stepper}>
					<Box sx={{ width: "100%" }}>
						<Stepper activeStep={activeStep} style={{ padding: "10px" }} alternativeLabel>
							{steps.map((label) => {
								const stepProps = {};
								const labelProps = {};
								return (
									<Step key={label} {...stepProps}>
										<StepLabel {...labelProps}>{label}</StepLabel>
									</Step>
								);
							})}
						</Stepper>
						{activeStep === steps.length ? (
							<>
								<Typography sx={{ mt: 2, mb: 1 }}>
									<div className={Styles.formcontainer}>
										{renderSwitch(activeStep)}
									</div>
								</Typography>
								<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
									<Box sx={{ flex: "1 1 auto" }} />
									<Button
										color="primary"
										variant="contained"
										onClick={(e) => { e.preventDefault(); history.push("/login"); }}
									>
										Login
									</Button>
								</Box>
							</>
						) : (
							<>
								<Typography sx={{ mt: 2, mb: 1 }}>
									<div className={Styles.formcontainer}>
										{renderSwitch(activeStep)}
									</div>
								</Typography>
								<div>
									<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
										<Button
											color="inherit"
											disabled={activeStep === 0}
											onClick={handleBack}
											sx={{ mr: 1 }}
										>
											Back
										</Button>
										<Box sx={{ flex: "1 1 auto" }} />

										<Button
											aria-label="submit"
											type="submit"
											color="primary"
											variant="contained"
											// style={{ marginTop: "20px" }}
											onClick={(e) => {
												switch (activeStep) {
												case 0: handleSubmit1(e);
													break;
												case 1: handleSubmit2(e);
													break;
												default: handleSubmit3(e);
													break;
												}
											}}
										>
											{/* Finish */}
											{activeStep === steps.length ? "Finish" : "Next"}
										</Button>
									</Box>
								</div>
							</>
						)}
					</Box>
				</div>
			</div>
		</div>
	);
};

export default Register;
