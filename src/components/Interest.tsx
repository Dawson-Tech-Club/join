import { Card, CardContent, MenuItem, Typography } from "@material-ui/core";
import React from "react";
import { SelectValidator } from "react-material-ui-form-validator";
import { SetState } from "../types";
import { eventToSetValue } from "../utils/eventToSetValue";

function SelectInput({
	label,
	items,
	value,
	setValue,
}: {
	label: string;
	items: Record<string, string>;
	value: string;
	setValue: SetState<string>;
}) {
	return (
		<SelectValidator
			name={label}
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

export function Interest({
	membership,
	setMembership,
	desire,
	setDesire,
	topic,
	setTopic,
}: {
	membership: string;
	desire: string;
	topic: string;
	setMembership: SetState<string>;
	setDesire: SetState<string>;
	setTopic: SetState<string>;
}) {
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
				<Typography variant="caption" color="textSecondary">
					Executives manage and organize budget, events and projects. Active members
					create events and build projects. Members participate in some events and
					projects.
				</Typography>

				<SelectInput
					label="Desire"
					value={desire}
					setValue={setDesire}
					items={{
						learn: "Learn",
						build: "Build",
					}}
				/>
				<Typography variant="caption" color="textSecondary">
					Do you want to learn, or build and create cool things to challenge yourself? In
					other words, how confident are you?
				</Typography>

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
				<Typography variant="caption" color="textSecondary">
					Which topic would you like to learn about and build with?
				</Typography>
			</CardContent>
		</Card>
	);
}
