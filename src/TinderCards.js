import React, { useState } from "react";
import "./TinderCards.css";

import TinderCard from "react-tinder-card";

function TinderCards() {
	//! useState below
	const [people, setPeople] = useState([
		{
			name: "Tupac",
			url:
				"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fogdenpayne%2Ffiles%2F2016%2F09%2Ftupac-poetic-justice-1200x826.jpg"
		},
		{
			name: "Rihanna",
			url:
				"https://cdn.24.co.za/files/Cms/General/d/557/08109823f9794801a59ae6fb960bb925.jpg"
		}
	]);

	return (
		<div>
			<h1>Tinder cards</h1>

			{people.map((person) => (
				<TinderCard
					//
					className="swipe"
					key={person.name}
					//
					preventSwipe={["up", "down"]}
					//
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
	);
}

export default TinderCards;
