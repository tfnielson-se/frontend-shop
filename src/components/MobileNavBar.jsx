import { Link } from "react-router-dom";
import { useState } from "react";

import {BiCoffeeTogo} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi'

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
                <div onClick={handleOpenMobileMenu} className="flex justify-around text-2xl m-1 border-t-2 border-r-2 border-stone-900 p-1 w-1/3">
                    <p className="m-auto"><GiHamburgerMenu/></p>
					<p  className="text-4xl"><BiCoffeeTogo/></p>
                </div>    
                
			) : (
				<div onClick={closeMobileMenu} className="flex justify-center text-xl m-1 border-t-2 border-r-2 border-stone-900 p-1 w-1/3">
					<div >
                    <Link to="/menu" className="text-3xl m-auto">Menu</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default MobileNavBar;
