import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export function NoTouchAlert() {
	const [url, setUrl] = useState(false);
	useEffect(() => {
		if ("ontouchstart" in window) return;
		setUrl(window.location.href);
	}, []);
	return (
		url && (
			<Alert style={{ marginBottom: 20 }} severity="info">
				<AlertTitle>You are not on a touch screen device.</AlertTitle>
				This form requires a signature. Scan the QR Code with your phone.
				<div style={{ marginTop: 10 }}>
					<QRCode value={url} bgColor="transparent" size={200}></QRCode>
				</div>
			</Alert>
		)
	);
}
