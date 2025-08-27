import "./App.css";
import { Navbar } from "./Components/Navbar";

export const App = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "0 8px" }}>
			<Navbar />
			<main></main>
			<footer></footer>
		</div>
	);
};
