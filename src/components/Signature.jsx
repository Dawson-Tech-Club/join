import { Card, CardContent, Typography, Button } from "@material-ui/core";
import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import Alert from "@material-ui/lab/Alert";

export function Signature({ setSignature, signature, signatureError, setSignatureError }) {
	const [canvas, setCanvas] = useState();
	const card = useRef();
	return (
		<Card style={{ marginBottom: 20 }} ref={card}>
			<CardContent>
				<Typography variant="h5" gutterBottom>
					Signature
					{signature && (
						<Button
							style={{ float: "right" }}
							onClick={() => {
								setSignature("");
								canvas.clear();
							}}
						>
							Erase
						</Button>
					)}
				</Typography>
				<Typography variant="body1" color="textSecondary" gutterBottom>
					Dawson Student Union requires a signature. Your signature will be kept safe and
					encrypted under PKI.
				</Typography>
				<SignatureCanvas
					ref={(ref) => {
						setCanvas(ref);
						if (signatureError) {
							card.current.scrollIntoView();
						}
					}}
					onEnd={() => {
						setSignatureError(false);
						setSignature(canvas.getTrimmedCanvas().toDataURL());
					}}
					canvasProps={{
						width: 520,
						height: 200,
						style: {
							background: "#eee",
							marginTop: 10,
						},
					}}
				/>
				{signatureError && (
					<Alert severity="error" onClose={() => setSignatureError(false)}>
						{signatureError}
					</Alert>
				)}
			</CardContent>
		</Card>
	);
}
