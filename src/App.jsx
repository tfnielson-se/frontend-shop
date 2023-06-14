import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
	return (
		<main className="flex flex-col m-5">
			<div className="flex-none"><NavBar />
            <hr className="border-stone-600"></hr>
            </div>

            <div className="grow m-10">
            <Routes>
			<Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            </Routes>
            </div>
            <div className="flex-none">
            <hr className="border-stone-600"></hr>
                <Footer/></div>
		</main>
	);
}

export default App;
