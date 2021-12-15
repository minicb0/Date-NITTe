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
	// Typography,
	Container,
	// Grid,
	InputAdornment,
	IconButton,
	// Link,
} from "@material-ui/core";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import { ApiService } from "../../../api.services";

import Styles from "./Style.module.css";
// import { useStyles } from "./styles";

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
	// const classes = useStyles();
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
		// }
		const [showPassword, setShowPassword] = useState(false);
		const [showConfirmPassword, setShowConfirmPassword] = useState(false);
		const [Name, setName] = useState("");
		const [Rollno, setRollNo] = useState("");
		const [Password, setPassword] = useState("");
		const [Gender, setGender] = useState('');
		const [PhoneNo, setPhoneno] = useState();
		const [selectedDate, setSelectedDate] = useState(new Date('2014-01-01'));
		const [ConfirmPassword, setConfirmPassword] = useState("");
		const handleClickShowPassword = () => setShowPassword(!showPassword);
		const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
		const handleDateChange = (date) => {
			setSelectedDate(date);
    };
	const classes = useStyles();
	const handlegenderChange = (event) => {
		setGender(event.target.value);
	};
	const validat = (name, rollno, gender, phoneno, date, password, confirmpassword) => {
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
const handleSubmit = (e) => {
	e.preventDefault();
    const obj = validat(Name, Rollno, Gender, PhoneNo, selectedDate, Password, ConfirmPassword);
    const isvalidated = obj.isvalidated;
    const msg = obj.msg;
    console.log(isvalidated);
    console.log(msg);
	if (isvalidated) {
		handleNext();
	}
};
function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
		return (
<div className={Styles.paper}>
		{/* {msg.map((errors)=>(
			<div>{errors}</div>
		))} */}
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
		onClick={(e) => handleSubmit(e)}
	>
		{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
	</Button>
</div>
	);

		case 1:
		return (
		<div className={Styles.paper}>
			<Button
				disabled={activeStep === 0}
				onClick={handleBack}
				className={classes.backButton}
			>
				Back
			</Button>
			<Button variant="contained" color="primary" onClick={handleNext}>
				{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
			</Button>
		</div>
		);
		case 2:
		return (
		<div className={Styles.paper}>
			<Button
				disabled={activeStep === 0}
				onClick={handleBack}
				className={classes.backButton}
			>
				Back
			</Button>
			<Button variant="contained" color="primary" onClick={handleNext}>
				{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
			</Button>
		</div>

		);
		default:
		return 'Unknown stepIndex';
	}
}

	return (
		<div>
			<Container
				maxWidth="sm"
				className="container"
			>
			{/* Start of Stepper */}
			<div className={classes.root}>
      			<Stepper activeStep={activeStep} alternativeLabel>
        			{steps.map((label) => (
					<Step key={label}>
            			<StepLabel>{label}</StepLabel>
					</Step>
					))}
      			</Stepper>
			<div>
        	{activeStep === steps.length ? (
				<div>
            		<Typography className={classes.instructions}>All steps completed</Typography>
            		<Button onClick={handleReset}>Reset</Button>
				</div>
			) : (
			<div>
            	<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            		<div>
					{/* <Button
					disabled={activeStep === 0}
					onClick={handleBack}
					className={classes.backButton}
					>
					Back
					</Button>
					<Button variant="contained" color="primary" onClick={handleNext}>
						{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
					</Button> */}
            		</div>
			</div>
			)}
			</div>
			</div>
		{/* End of Stepper */}
			</Container>
		</div>
	);
};
