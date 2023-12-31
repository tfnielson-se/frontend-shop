
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import MobileNavBar from "./components/MobileNavBar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {


	return (
		<main className="flex flex-col">
			<div className="hidden lg:grid lg:flex-none">
				<NavBar />
				<hr className="border-stone-600"></hr>
			</div>
            <div className="flex-none lg:hidden m-5">
				<MobileNavBar />
				<hr className="border-stone-600"></hr>
			</div>
			<div className="grow m-0 lg:m-10">
				<Routes>
					<Route exact path="/" element={<Home />} />
                    <Route exact path="/menu" element={<Menu />} />
				</Routes>
			</div>
			<div className="flex-none lg:m-5">
				<hr className="border-stone-600"></hr>
				<Footer />
			</div>
		</main>
	);
}

export default App;
