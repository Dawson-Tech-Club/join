import {
	Button,
	Container,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@material-ui/core";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { JSEncrypt } from "../utils/JSEncrypt";

export default function View() {
	const [rows, setRows] = useState([]);
	const [privateKey, setPrivateKey] = useState(false);

	return (
		<Container style={{ marginTop: 20 }}>
			<Helmet>
				<title>DTC Sign - View</title>
			</Helmet>
			{!privateKey && (
				<Button variant="contained" component="label" style={{ marginBottom: 20 }}>
					Set Private Key
					<input
						type="file"
						hidden
						accept=".pem"
						onChange={async (e) => {
							const file = e.target.files[0];
							if (!file) {
								alert("No private key file selected");
								return;
							}
							setPrivateKey(await file.text());
						}}
					/>
				</Button>
			)}
			{privateKey && (
				<>
					<TableContainer component={Paper}>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Full Name</TableCell>
									<TableCell>Student ID</TableCell>
									<TableCell>Email</TableCell>
									<TableCell>Membership</TableCell>
									<TableCell>Desire</TableCell>
									<TableCell>Topic</TableCell>
									<TableCell>Signature</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row, i) => (
									<TableRow key={i}>
										<TableCell>{row.name}</TableCell>
										<TableCell>{row.id}</TableCell>
										<TableCell>{row.email}</TableCell>
										<TableCell>{row.membership}</TableCell>
										<TableCell>{row.desire}</TableCell>
										<TableCell>{row.topic}</TableCell>
										<TableCell>
											<img src={row.signature} style={{ height: 30 }} />
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<Button variant="contained" component="label" style={{ marginTop: 20 }}>
						Add Signature
						<input
							type="file"
							hidden
							accept=".sig"
							onChange={async (e) => {
								try {
									const file = e.target.files[0];
									if (!file) {
										alert("No signature file selected");
										return;
									}
									const text = await file.text();
									const rsa = new JSEncrypt();
									rsa.setPrivateKey(privateKey);
									const decrypted = text
										.trim()
										.split("\n")
										.map((v) => rsa.decrypt(v))
										.join("");
									const row = JSON.parse(decrypted);
									setRows([...rows, row]);
								} catch (e) {
									console.log(e);
									alert("Invalid signature file");
								}
							}}
						/>
					</Button>
				</>
			)}
		</Container>
	);
}
