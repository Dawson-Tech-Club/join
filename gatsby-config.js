module.exports = {
	siteMetadata: {
		siteUrl: "https://join.dawsontech.club",
		title: "Join DTC",
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		`gatsby-plugin-material-ui`,
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "Join DTC",
				short_name: "Join DTC",
				start_url: "/",
				background_color: "#1985C5",
				theme_color: "#1985C5",
				display: "standalone",
				icon: "src/images/icon.png",
				crossOrigin: `use-credentials`,
			},
		},
	],
};
