import { Container } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Navbar } from "../components/Navbar";
import { NoTouchAlert } from "../components/NoTouchAlert";

export default function Index() {
	return (
		<>
			<Helmet>
				<title>DTC Sign - Join us</title>
			</Helmet>
			<Navbar></Navbar>
			<Container maxWidth="sm" style={{ marginBottom: 20 }}>
				<NoTouchAlert />
				<Form />
				<Footer />
			</Container>
		</>
	);
}
