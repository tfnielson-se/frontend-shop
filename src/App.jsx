import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
	return (
		<section className="m-5">
			<NavBar />
            <Routes>
			<Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            </Routes>
		</section>
	);
}

export default App;
