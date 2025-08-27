import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { HomePage } from "./Pages/HomePage";

export const App = () => {
	return (
		<div className="app-container" style={{ display: "flex", flexDirection: "column" }}>
			<Navbar />
			<main>
				<Routes>
					<Route path="/home" element={<HomePage />} />
					<Route path="/features" />
					<Route path="/community" />
					<Route path="/blog" />
					<Route path="/pricing" />
				</Routes>
			</main>
			<footer></footer>
		</div>
	);
};
