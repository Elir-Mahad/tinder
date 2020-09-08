import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import { database } from "./firebase.js";

import TinderCard from "react-tinder-card";

function TinderCards() {
	//
	//! useState below
	const [people, setPeople] = useState([]);

	// ! UseEffect below

	useEffect(() => {
		database
			// Enter the firebase database
			.collection("people")
			// Get the posts inside firebase
			.onSnapshot((snapshot) =>
				setPeople(snapshot.docs.map((doc) => doc.data()))
			);
	}, []);

	//! Code to be rendered below

	return (
		<div>
			<h1>Tinder cards</h1>

			<div classNametinderCards_CardContainer>
				{people.map((person) => (
					<TinderCard
						//
						className="swipe"
						key={person.name}
						//
						preventSwipe={["up", "down"]}
						// disables the ability to move cards up and down
					>
						<div
							style={{ backgroundImage: `url(${person.url})` }}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default TinderCards;
