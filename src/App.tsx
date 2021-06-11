import "./styles/index.css";
import React from "react";
import LandingPage from "./pages/Landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Rick from "./components/Rick";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<LandingPage />
				</Route>
				<Route exact path='/rick'>
					<Rick />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
