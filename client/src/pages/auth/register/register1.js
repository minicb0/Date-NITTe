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

function register1() {
	return (
		<div />
	);
}

export default register1;
