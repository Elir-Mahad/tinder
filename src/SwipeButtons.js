import React from "react";
import "./SwipeButtons.css";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

function SwipeButtons() {
	return (
		<div className="swipeButtons">
			<ReplayIcon fontSize="large" />
			<CloseIcon fontSize="large" />
			<StarRateIcon fontSize="large" />
			<FavoriteIcon fontSize="large" />
			<FlashOnIcon fontSize="large" />
		</div>
	);
}

export default SwipeButtons;
