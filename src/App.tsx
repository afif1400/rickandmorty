import "./styles/index.css";
import React from "react";
import LandingPage from "./pages/Landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<LandingPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
