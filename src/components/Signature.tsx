import { Button, Card, CardContent, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { SetState } from "../types";

export function Signature({
	setSignature,
	signature,
	signatureError,
	setSignatureError,
}: {
	setSignature: SetState<string>;
	signature: string;
	signatureError: string;
	setSignatureError: SetState<string>;
}) {
	const [canvas, setCanvas] = useState<SignatureCanvas>();
	const cardRef = useRef<HTMLElement>();
	return (
		<Card style={{ marginBottom: 20 }} ref={cardRef}>
			<CardContent>
				<Typography variant="h5" gutterBottom>
					Signature
					{signature && (
						<Button
							style={{ float: "right" }}
							onClick={() => {
								setSignature("");
								if (canvas) {
									canvas.clear();
								}
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
						if (ref) {
							setCanvas(ref);
						}
						if (signatureError) {
							cardRef.current?.scrollIntoView();
						}
					}}
					onEnd={() => {
						setSignatureError("");
						if (canvas) {
							setSignature(canvas.getTrimmedCanvas().toDataURL());
						}
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
					<Alert severity="error" onClose={() => setSignatureError("")}>
						{signatureError}
					</Alert>
				)}
			</CardContent>
		</Card>
	);
}
