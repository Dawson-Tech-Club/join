import React, { useState } from "react";

import { ValidatorForm } from "react-material-ui-form-validator";
import { Banner } from "./Banner";
import Alert from "@material-ui/lab/Alert";
import { Interest } from "./Interest";
import { Contacts } from "./Contacts";
import { Signature } from "./Signature";
import { Submit } from "./Submit";
import { sendMessageFile } from "../utils/discord";
import { JSEncrypt } from "../utils/JSEncrypt";
import { publicKey } from "../utils/publicKey";

export function Form() {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [signature, setSignature] = useState("");
	const [membership, setMembership] = useState("");
	const [desire, setDesire] = useState("");
	const [topic, setTopic] = useState("");

	const [signatureError, setSignatureError] = useState("");
	const [error, setError] = useState("");

	return (
		<ValidatorForm
			onSubmit={async () => {
				if (signature === "") {
					setSignatureError("Signature is required");
					return;
				}
				const json = JSON.stringify({
					id,
					name,
					signature,
					membership,
					desire,
					topic,
					email,
				});
				const rsa = new JSEncrypt();
				rsa.setPublicKey(publicKey);
				if (typeof json !== "string") return;
				const encrypted = json
					?.match(/.{1,128}/g)
					?.map((v) => rsa.encrypt(v))
					.join("\n");
				const ok =
					encrypted && (await sendMessageFile(encrypted, id + "_" + name + ".sig"));
				if (ok) {
					window.location.pathname = "/ty";
					return;
				}
				setError("Failed to send signature.");
			}}
		>
			<Banner />
			<Contacts {...{ id, setId, name, setName, email, setEmail }} />
			<Signature {...{ signature, setSignature, signatureError, setSignatureError }} />
			<Interest {...{ membership, setMembership, desire, setDesire, topic, setTopic }} />
			<Submit />
			{error && (
				<Alert severity="error" onClose={() => setError("")}>
					{error}
				</Alert>
			)}
		</ValidatorForm>
	);
}
