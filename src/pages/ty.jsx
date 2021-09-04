import { Container, Typography } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet";
import { DiscordWidget } from "../components/DiscordWidget";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function Ty() {
	return (
		<>
			<Helmet>
				<title>DTC Sign - Thank you!</title>
			</Helmet>
			<Navbar></Navbar>
			<Container maxWidth="sm" style={{ marginBottom: 20 }}>
				<Typography variant="h3" gutterBottom>
					Thank you!
				</Typography>
				<Typography variant="h6" gutterBottom color="textSecondary">
					Please join our Discord community to receive annoucements.
				</Typography>
				<DiscordWidget />
				<Footer />
			</Container>
		</>
	);
}
