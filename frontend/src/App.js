import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Hotel from "./hotel/Hotel.js";
import List from "./list/List.js";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/hotels"
					element={<List />}
				/>
				<Route
					path="/hotels/:id"
					element={<Hotel />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
