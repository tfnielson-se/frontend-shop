import { Link } from "react-router-dom";

const NavBar = () => {
	return (
			<nav className="flex">
				<div>
					<p>CafeOle!</p>
				</div>
				<div className="flex w-full justify-around">
                <div>
						<Link to='/'>Home</Link>
					</div>
					<div>
						<Link to='/about'>About</Link>
					</div>
					<div>
						<Link>Menu</Link>
					</div>
				</div>
			</nav>
    )
};

export default NavBar;
