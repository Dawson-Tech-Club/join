import React from "react";
import { Helmet } from "react-helmet";

// @ts-expect-error file exists
import { siteMetadata } from "../../gatsby-config.js";

// @ts-ignore image exists
import iconImage from "../images/icon.png";

export function Head({ name }: { name: string }) {
	return (
		<Helmet
			title={siteMetadata.title + " - " + name}
			meta={[
				{
					property: `og:title`,
					content: "Join the Dawson Tech Club",
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:image`,
					content: siteMetadata.siteUrl + "/" + iconImage,
				},
			]}
		/>
	);
}
