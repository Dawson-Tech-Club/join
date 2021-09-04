import { Card, CardContent, InputAdornment, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { TextValidator } from "react-material-ui-form-validator";
import { eventToSetValue } from "../utils/eventToSetValue";

function TextInput({ label, value, setValue, validators = [], errorMessages = [], ...props }) {
	return (
		<TextValidator
			{...props}
			style={{ marginTop: 20 }}
			label={label}
			fullWidth
			required
			value={value}
			onChange={eventToSetValue(setValue)}
			variant="outlined"
			validators={["required", ...validators]}
			errorMessages={["This field is required", ...errorMessages]}
		/>
	);
}

export function Contacts({ id, name, email, setId, setName, setEmail }) {
	return (
		<Card style={{ marginBottom: 20 }}>
			<CardContent>
				<Typography variant="h5" gutterBottom>
					Contacts
				</Typography>
				<Typography variant="body1" color="textSecondary" gutterBottom>
					To open a club, we need at least 50 members and 10 active members. Help us make
					this club a reality by signing this easy-to-sign online form.
				</Typography>
				<TextInput label="Full Name" value={name} setValue={setName} />
				<TextInput
					label="Student ID"
					value={id}
					setValue={setId}
					validators={["matchRegexp:^[0-9]{7}$"]}
					errorMessages={["Invalid student ID"]}
				/>
				<TextInput
					label="Email"
					value={email}
					setValue={setEmail}
					validators={["matchRegexp:^[a-z]+\\.[a-z]+$"]}
					errorMessages={["Invalid email"]}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">@dawsoncollege</InputAdornment>
						),
					}}
				/>
			</CardContent>
		</Card>
	);
}
