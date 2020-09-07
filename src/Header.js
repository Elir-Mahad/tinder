import React from "react";
import "./Header.css";

import PersonIcon from "@material-ui/icons/Person";

function Header() {
	return (
		<div className="header">
			<PersonIcon />
			<h1>header</h1>
		</div>
	);
}

export default Header;
