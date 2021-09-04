import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React from "react";

export function Submit() {
	return (
		<Card style={{ marginBottom: 10 }}>
			<CardContent>
				<Typography variant="h5" gutterBottom>
					Thank you!
				</Typography>
				<Typography variant="body1" color="textSecondary" gutterBottom>
					Thank you for being a member of the Dawson Tech Club. Hope to see you soon on
					campus!
				</Typography>
			</CardContent>
			<CardActions>
				<Button type="submit" color="primary">
					Submit
				</Button>
			</CardActions>
		</Card>
	);
}
