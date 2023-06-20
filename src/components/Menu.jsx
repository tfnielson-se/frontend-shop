import CafeCard from "./CafeCard";
import { SiCoffeescript } from "react-icons/si";
import cafeImg from "../public/cafes.jpg";
import foodImg from "../public/bagel.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
	return (
        <AnimatePresence>
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
            
        >
		<section className="flex flex-col rounded-xl">
			<div className="flex flex-around text-3xl mx-5 border-b-2 border-stone-900">
				{/* <SiCoffeescript /> */}
				<p className="mx-2 title">Cafes!</p>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="my-3 flex lg:w-1/3">
					<img
						src={cafeImg}
						alt="coffee image"
						className="object-cover lg:rounded-xl opacity-80"
					/>
				</div>
				<div className="flex flex-col lg:w-2/3 m-3">
					<CafeCard
						name={"mocha"}
						price={"10.00"}
						description={"lorem ipsum"}
					/>
					<CafeCard
						name={"cappuchino"}
						price={"8.00"}
						description={"lorem ipsum"}
					/>
					<CafeCard
						name={"americano"}
						price={"4.00"}
						description={"lorem ipsum"}
					/>
					<CafeCard
						name={"mocha"}
						price={"10.00"}
						description={"lorem ipsum"}
					/>
					<CafeCard
						name={"cappuchino"}
						price={"8.00"}
						description={"lorem ipsum"}
					/>
					<CafeCard
						name={"americano"}
						price={"4.00"}
						description={"lorem ipsum"}
					/>
				</div>
			</div>
			<div className="flex flex-around text-3xl mx-5 border-b-2 border-stone-900">
				{/* <SiCoffeescript /> */}
				<p className="mx-2 title">Food!</p>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="my-3 flex lg:w-1/3">
					<img
						src={foodImg}
						alt="coffee image"
						className="object-cover lg:rounded-xl opacity-80"
					/>
				</div>
				<div className="flex flex-col lg:w-2/3 mx-3">
					<CafeCard
						name={"turket blt"}
						price={"10.00"}
						description={"lorem ipsum"}
					/>
					<CafeCard
						name={"veggie d'light"}
						price={"8.00"}
						description={"lorem ipsum"}
					/>
					<CafeCard
						name={"the brake-fast"}
						price={"4.00"}
						description={"lorem ipsum"}
					/>
					<CafeCard
						name={"Lox salmon"}
						price={"10.00"}
						description={"lorem ipsum"}
					/>
					<CafeCard
						name={"Raisin Cream Cheese"}
						price={"8.00"}
						description={"lorem ipsum"}
					/>
					<CafeCard
						name={"cubano"}
						price={"4.00"}
						description={"lorem ipsum"}
					/>
				</div>
			</div>
		</section>
        </motion.div>
			</AnimatePresence>
	);
};

export default Menu;
