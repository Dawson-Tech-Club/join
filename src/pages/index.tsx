import { Container } from "@material-ui/core";
import React from "react";
import { Head } from "../components/Head";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Navbar } from "../components/Navbar";
import { NoTouchAlert } from "../components/NoTouchAlert";

export default function Index() {
	return (
		<>
			<Head name="Form" />
			<Navbar></Navbar>
			<Container maxWidth="sm" style={{ marginBottom: 20 }}>
				<NoTouchAlert />
				<Form />
				<Footer />
			</Container>
		</>
	);
}
