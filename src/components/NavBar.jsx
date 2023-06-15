import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="flex m-5">
			<div className="w-1/4 text-center title text-4xl">
				<p>CaféOle!</p>
			</div>
			<div className="flex w-full justify-around text-2xl m-auto">
				<div className="border-b border-gray-500 px-2">
					<Link to="/">Home</Link>
				</div>
				<div className="border-b border-gray-500 px-2">
					<Link to="/about">About</Link>
				</div>
				<div className="border-b border-gray-500 px-2">
					<Link>Menu</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
