import { Container, Typography } from "@material-ui/core";
import React from "react";
import { Head } from "../components/Head";
import { DiscordWidget } from "../components/DiscordWidget";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function Ty() {
	return (
		<>
			<Head name="Thank you" />
			<Navbar></Navbar>
			<Container maxWidth="sm" style={{ marginBottom: 20 }}>
				<Typography variant="h4" gutterBottom>
					Thank you!
				</Typography>
				<Typography variant="h6" color="textSecondary" style={{ marginBottom: 20 }}>
					Please join our Discord community to receive annoucements.
				</Typography>
				<DiscordWidget />
				<Footer />
			</Container>
		</>
	);
}
