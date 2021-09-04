import React from "react";
import { Link, Typography } from "@material-ui/core";

export function Footer() {
	return (
		<div style={{ marginTop: 40, marginBottom: 40 }}>
			<Typography variant="body1" color="textSecondary" gutterBottom>
				Form created by and for Dawson Tech Club.{" "}
				<Link href="https://github.com/Dawson-Tech-Club/join">GitHub Repository</Link>
			</Typography>
			<Typography variant="caption" color="textSecondary">
				©Dawson Tech Club 2021-
				{new Date().getFullYear()}
			</Typography>
		</div>
	);
}
