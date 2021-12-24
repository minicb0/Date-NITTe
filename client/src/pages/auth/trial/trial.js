/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-console */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable eol-last */
import React, { useState } from "react";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
// import InputBase from '@material-ui/core/InputBase';
// import FormHelperText from '@material-ui/core/FormHelperText';

import "react-toastify/dist/ReactToastify.css";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from '@material-ui/FormControl';
// import Select from "@material-ui/core/Select";

// import { ToastContainer, toast } from "react-toastify";
import {
	Button,
    TextField,
	Typography,
	Container,
	// Grid,
	InputAdornment,
	IconButton,
	// Link,
} from "@material-ui/core";
// import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import Typography from '@material-ui/core/Typography';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import { ApiService } from "../../../api.services";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Styles from "./Style.module.css";
// import Background from "../../../assets/images/bg.jpg";
// import { useStyles } from "./styles";
const finalSpaceCharacters = [
	{
	  id: 'Entertainment',
	  name: 'Entertainment',
	},
	{
	  id: 'Foods and Travel',
	  name: 'Foods and Travel',
	},
	{
	  id: 'Books',
	  name: 'Books',
	},
	{
	  id: 'Sports',
	  name: 'Sports',
	},
  ];

export const trial = () => {
	const useStyles = makeStyles((theme) => ({
		root: {
		width: '100%',
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
	function getSteps() {
		return ['Basic Details', 'Personal Details', 'Final Step'];
	}
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	const handleReset = () => {
		setActiveStep(0);
	};
	// function HorizontalLabelPositionBelowStepper() {
	// 	}
	const [showPassword, setShowPassword] = useState(false);
		const [showConfirmPassword, setShowConfirmPassword] = useState(false);
		const [Name, setName] = useState("");
		const [Rollno, setRollNo] = useState("");
		const [UserName, setUserName] = useState("");
		const [Password, setPassword] = useState("");
		const [Gender, setGender] = useState('');
		const [PhoneNo, setPhoneno] = useState();
		const [selectedDate, setSelectedDate] = useState(new Date('2014-01-01'));
		const [ConfirmPassword, setConfirmPassword] = useState("");
		const [Preferrence, setPreferrence] = useState("");
		const [characters, updateCharacters] = useState(finalSpaceCharacters);
		const handleClickShowPassword = () => setShowPassword(!showPassword);
		const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
		const handleDateChange = (date) => {
			setSelectedDate(date);
    };
	// const classes = useStyles();
	const handlegenderChange = (event) => {
		setGender(event.target.value);
	};
	const validat1 = (name, rollno, gender, phoneno, date, password, confirmpassword) => {
		let isvalidated = false;
		let numofvalid = 0;
		const msg = [];
		const isNum = (num) => /^\d+$/.test(num) || /^\d+\.\d+$/.test(num);
		console.log(name, rollno, gender, phoneno, date, password, confirmpassword);

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
	isvalidated: isvalidated,
    msg: msg,
};
return obj;
};
const handleSubmit1 = (e) => {
	e.preventDefault();
    const obj = validat1(Name, Rollno, Gender, PhoneNo, selectedDate, Password, ConfirmPassword);
    const isvalidated = obj.isvalidated;
    const msg = obj.msg;
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
};
// Drag and Drop

function handleOnDragEnd(result) {
	if (!result.destination) return;

	const items = Array.from(characters);
	const [reorderedItem] = items.splice(result.source.index, 1);
	items.splice(result.destination.index, 0, reorderedItem);

	updateCharacters(items);
}

// End of Drag and Drop

function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
		return (
<div className={Styles.paper}>
{/* <Grid
	className={Styles.form}
	container
	spacing={5}
	direction="column"
	justifyContent="center"
	alignItems="center"
> */}
<form>
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
		/>
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
		'aria-label': 'change date',
		}}
	/>
  </Grid>
</MuiPickersUtilsProvider>
{/* <div style={{ fontSize: "20px" }}>
	Interests
</div> */}

{/* Interest Column */}

	{/* <Typography style={{ fontSize: "15px", marginTop: "10px" }}>Interests:</Typography>

<Button variant="outlined" size="small" color="default" style={{ marginLeft: "20px",
marginTop: "10px" }}>
	Entertainments
</Button>
	<br />
	<Button variant="outlined" size="small" color="default" style={{ marginLeft: "20px",
	marginTop: "10px" }}>
		Sports
	</Button>
	<br />
	<Button variant="outlined" size="small" color="default" style={{ marginLeft: "20px",
	marginTop: "10px" }}>
		Travel and Food
	</Button>
	<br />
	<Button variant="outlined" size="small" color="default" style={{ marginLeft: "20px",
	marginTop: "10px" }}>
		Books
	</Button>
	<br /> */}

{/* End of Interest Column */}
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
	{/* <Button
		className={Styles.button}
		aria-label="submit"
		type="submit"
		variant="text"
		// className={classes.submit}
		onClick={(e) => handleSubmit(e)}
	>
			NEXT
	</Button> */}
	<Button
		disabled={activeStep === 0}
		onClick={handleBack}
		className={classes.backButton}
	>
		Back
	</Button>
	<Button
		aria-label="submit"
		type="submit"
		color="primary"
		variant="contained"
		// style={{ marginTop: "20px" }}
		onClick={(e) => handleSubmit1(e)}
	>
	 	{/* Finish */}
	 	{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
	</Button>
</form>
{/* </Grid> */}
</div>
	);
	case 1:
	return (
	<div style={{ textAlign: "left", marginLeft: "20%", width: "50%" }}>
	<form>
	<div className="App">
      <header className="App-header">
        <h3>Preferrence Order</h3>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              	<ul style={{ padding: "0px" }} className={Styles.list} {...provided.droppableProps} ref={provided.innerRef}>
                	{characters.map(({ id, name }, index) => {
						return (
                    		<Draggable key={id} draggableId={id} index={index}>
								{(provided) => (
									<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
										{ name }
									</div>
								)}
                    		</Draggable>
						);
              		})}
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
		<Button
			disabled={activeStep === 0}
			onClick={handleBack}
			className={classes.backButton}
		>
			Back
		</Button>
		<Button variant="contained" color="primary" type="submit" onClick={(e) => { handleSubmit2(e); }}>
			{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
		</Button>
	</form>
	</div>
		);
		case 2:
		return (
		<div className={Styles.paper}>
		<form>
			<Button
				disabled={activeStep === 0}
				onClick={handleBack}
				className={classes.backButton}
			>
				Back
			</Button>
			<Button variant="contained" color="primary" type="submit" onClick={(e) => { handleSubmit3(e); }}>
				{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
			</Button>
		</form>
		</div>
		);
		default:
		return 'Unknown stepIndex';
	}
}
	return (
		<div id="1234" className={Styles.root} style={{ textAlign: "center" }}>
		{/* <img src={Background} className={Styles.bgimg} alt="bgimg" /> */}
			<Container
				maxWidth="xs"
				component="main"
				className={Styles.form}
				styles={{ border: "20px solid black" }}
				id="123456"
			>
				{/* Start of Stepper */}
				<Stepper activeStep={activeStep} alternativeLabel>
					{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
					))}
				</Stepper>
        		{activeStep === steps.length ? (
					<div>
            			<Typography className={classes.instructions}>All steps completed</Typography>
            			<Button onClick={handleReset}>Reset</Button>
					</div>
				) : (
				<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
				)}
			{/* End of Stepper */}
			</Container>
		</div>
	);
};
