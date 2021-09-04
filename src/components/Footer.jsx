import React from "react";
import { Typography } from "@material-ui/core";

export function Footer() {
	return (
		<div style={{ marginTop: 40, marginBottom: 40 }}>
			<Typography variant="body1" gutterBottom>
				Form created by and for Dawson Technology Club.
			</Typography>
			<Typography variant="caption">
				©Dawson Technology Club 2021-
				{new Date().getFullYear()}
			</Typography>
		</div>
	);
}
