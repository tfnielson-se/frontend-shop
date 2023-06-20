import { Link } from "react-router-dom";
import { useState } from "react";

import {BiCoffeeTogo} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'

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
                <div onClick={handleOpenMobileMenu} className="flex justify-around text-4xl m-1 border-t-2 border-r-2 border-stone-900 p-1 w-1/3 fade-out">
                    <p className="m-auto"><GiHamburgerMenu/></p>
					
                </div>
                
			) : (
				<div onClick={closeMobileMenu} className="flex justify-around text-xl m-1 border-t-2 border-r-2 border-stone-900 p-1 w-1/3 fade-out">
                    <div >
                    <Link to="/" className="text-4xl m-auto"><AiFillHome/></Link>
					</div>
					<div >
                    <Link to="/menu" className="text-4xl m-auto"><BiCoffeeTogo/></Link>
					</div>
				</div>
                
			)}
		</nav>
	);
};

export default MobileNavBar;
