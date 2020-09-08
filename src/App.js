import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
	return (
		<div className="app">
			<Header />
			<Router>
				<Switch>
					<Route path="/chat">
						<h1> I am the chat page </h1>
					</Route>
					<Route path="/">
						<TinderCards />
					</Route>
				</Switch>
				<SwipeButtons />
			</Router>
		</div>
	);
}

export default App;
