import { Card, CardContent, MenuItem, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { SelectValidator } from "react-material-ui-form-validator";
import { eventToSetValue } from "../utils/eventToSetValue";

function SelectInput({ label, items, value, setValue }) {
	return (
		<SelectValidator
			style={{ marginTop: 20 }}
			label={label}
			required
			fullWidth
			variant="outlined"
			value={value}
			onChange={eventToSetValue(setValue)}
		>
			{Object.entries(items).map(([k, v]) => (
				<MenuItem value={k} key={k}>
					{v}
				</MenuItem>
			))}
		</SelectValidator>
	);
}

export function Interest({ membership, setMembership, desire, setDesire, topic, setTopic }) {
	return (
		<Card style={{ marginBottom: 20 }}>
			<CardContent>
				<Typography variant="h5" gutterBottom>
					Interest
				</Typography>
				<Typography variant="body1" color="textSecondary" gutterBottom>
					To decide on what events to host and the ones to drop, we need to know what are
					your interests as a potential member.
				</Typography>

				<SelectInput
					label="Membership"
					value={membership}
					setValue={setMembership}
					items={{
						executive: "Executive",
						active: "Active Member",
						member: "Member",
					}}
				/>

				<SelectInput
					label="Desire"
					value={desire}
					setValue={setDesire}
					items={{
						learn: "Learn",
						build: "Build",
					}}
				/>

				<SelectInput
					label="Topic"
					value={topic}
					setValue={setTopic}
					items={{
						ai: "AI",
						robotics: "Robotics",
						web: "Web",
						games: "Games",
						software: "Software",
					}}
				/>
			</CardContent>
		</Card>
	);
}
