import { Link } from "react-router-dom";
import { useState } from "react";

import {BiCoffeeTogo} from 'react-icons/bi';

const MobileNavBar = () => {
	const [hideMobileMenu, setHideMobileMenu] = useState(true);

    const handleOpenMobileMenu = () => {
        setHideMobileMenu(!hideMobileMenu)
    }

    const closeMobileMenu = () => {
        console.log
        setHideMobileMenu(!hideMobileMenu)
    }

	return (
		<nav className="flex justify-between my-1">
			<div className="flex justify-around text-3xl m-1 border-b-2 border-l-2 border-stone-900 p-1 title">
                <Link to="/">
				<p>CaféOle!</p><p className="p-1"></p>
                </Link>

			</div>
			{hideMobileMenu ? (
                <div onClick={handleOpenMobileMenu} className="flex justify-around text-2xl m-1 border-t-2 border-r-2 border-stone-900 p-1">
					<button  className="text-4xl"><BiCoffeeTogo/></button>
                    <p>Menu</p>
                </div>    
                
			) : (
				<div onClick={closeMobileMenu} className="flex w-full justify-around">
					<div>
						<Link to="/about">About</Link>
					</div>
					<div>
                    <Link to="/menu">Menu</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default MobileNavBar;
