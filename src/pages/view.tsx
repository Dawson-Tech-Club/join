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
import { Head } from "../components/Head";
import { JSEncrypt } from "../utils/JSEncrypt";

interface Row {
	name: string;
	id: string;
	email: string;
	membership: string;
	desire: string;
	topic: string;
	signature: string;
}

export default function View() {
	const [rows, setRows] = useState<Row[]>([]);
	const [privateKey, setPrivateKey] = useState(false);

	const handleSetPrivateKey = async (e: any) => {
		const file = e.target.files[0];
		if (!file) {
			alert("No private key file selected");
			return;
		}
		const text = await file.text();

		const rsa = new JSEncrypt();
		rsa.setPrivateKey(privateKey);
		rsa.setPrivateKey(text);
		if (rsa.decrypt(rsa.encrypt("ok")) !== "ok") {
			alert("Private key is not matching");
			return;
		}
		setPrivateKey(text);
	};

	const handleAddSignature = async (e: any) => {
		try {
			const file = e.target.files[0] as File;
			if (!file) {
				alert("No signature file selected");
				return;
			}
			const rsa = new JSEncrypt();
			rsa.setPrivateKey(privateKey);
			const text = await file.text();
			const decrypted = text
				.trim()
				.split("\n")
				.map((v) => rsa.decrypt(v))
				.join("");
			const row = JSON.parse(decrypted);
			setRows([...rows, row]);
		} catch (e) {
			alert("Invalid signature file");
		}
	};

	return (
		<Container style={{ marginTop: 20 }}>
			<Head name="View" />
			{privateKey ? (
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
											<img
												alt="signature"
												src={row.signature}
												style={{ height: 30 }}
											/>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<Button variant="contained" component="label" style={{ marginTop: 20 }}>
						Add Signature
						<input type="file" hidden accept=".sig" onChange={handleAddSignature} />
					</Button>
				</>
			) : (
				<Button variant="contained" component="label" style={{ marginBottom: 20 }}>
					Set Private Key
					<input type="file" hidden accept=".pem" onChange={handleSetPrivateKey} />
				</Button>
			)}
		</Container>
	);
}
