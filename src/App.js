import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import Header from "./Header";

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/chat">
						<h1> Chat </h1>
					</Route>
					<Route path="/">
						<h1> One </h1>
					</Route>
					{/* <Header /> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
