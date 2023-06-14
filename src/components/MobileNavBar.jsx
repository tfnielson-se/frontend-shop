import { Link } from "react-router-dom";
import { useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import {BiCoffeeTogo} from 'react-icons/bi';

const MobileNavBar = () => {
	const [hideMobileMenu, setHideMobileMenu] = useState(true);
	return (
		<nav className="flex justify-between my-1">
			<div className="flex justify-around text-2xl m-1 border-b-2 border-l-2 border-stone-900 p-1">
				<p>CafeOle!</p><p className="p-1"><GiCoffeeBeans /></p>

			</div>
			{hideMobileMenu ? (
                <div className="flex justify-around text-2xl m-1 border-t-2 border-r-2 border-stone-900 p-1">
					<button className="text-4xl"><BiCoffeeTogo/></button>
                    <p>menu</p>
                </div>    
                
			) : (
				<div className="flex w-full justify-around">
					<div>
						<Link to="/">Home</Link>
					</div>
					<div>
						<Link to="/about">About</Link>
					</div>
					<div>
						<Link>Menu</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default MobileNavBar;
