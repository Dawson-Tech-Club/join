import React from "react";
import { AppBar, Toolbar, Avatar } from "@material-ui/core";
import icon from "../images/icon.png";

export function Navbar() {
	return (
		<AppBar position="static" color="transparent" elevation={0}>
			<Toolbar>
				<Avatar alt="DTC" src={icon} />
			</Toolbar>
		</AppBar>
	);
}
