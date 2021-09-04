import React from "react";
import { AppBar, Toolbar, Avatar } from "@material-ui/core";
// @ts-expect-error image does exist
import iconImage from "../images/icon.png";

export function Navbar() {
	return (
		<AppBar position="static" color="transparent" elevation={0}>
			<Toolbar>
				<Avatar alt="DTC" src={iconImage} />
			</Toolbar>
		</AppBar>
	);
}
