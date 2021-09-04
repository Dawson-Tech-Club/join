import React from "react";
import { Helmet } from "react-helmet";

export function Head({ name }: { name: string }) {
	return (
		<Helmet>
			<title>Join DTC - {name}</title>
		</Helmet>
	);
}
