import React from "react";
import { Helmet } from "react-helmet";

// @ts-ignore image exists
import iconImage from "../images/icon.png";

export function Head({ name }: { name: string }) {
	return (
		<Helmet
			title={"Join DTC - " + name}
			meta={[
				{
					property: `og:title`,
					content: "Join the Dawson Tech Club now!",
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:image`,
					content: `https://join.dawsontech.club/${iconImage}`,
				},
			]}
		/>
	);
}
