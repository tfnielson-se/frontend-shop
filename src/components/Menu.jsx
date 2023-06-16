import CafeCard from "./CafeCard";
import { SiCoffeescript } from "react-icons/si";
import cafeImg from "../public/shop.jpg";
import foodImg from "../public/bagel.jpg";

const Menu = () => {
	return (
		<section className="flex flex-col rounded-xl">
			<div className="flex flex-around text-3xl mx-5 border-b-2 border-stone-900">
				{/* <SiCoffeescript /> */}
				<p className="mx-2 title">Cafes!</p>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="my-3 flex w-1/3">
					<img
						src={cafeImg}
						alt="coffee image"
						className="object-cover lg:rounded-xl opacity-80"
					/>
				</div>
				<div className="flex flex-col w-2/3">
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
			<div className="flex justify-around">
				<div className="flex flex-around text-3xl mx-5 border-b-2 border-stone-900">
					{/* <SiCoffeescript /> */}
					<p className="mx-2 title">Food!</p>
				</div>
				<div className="my-3">
					<img
						src={foodImg}
						alt="coffee image"
						className="object-cover lg:w-1/3 lg:rounded-xl opacity-80 py-5"
					/>
				</div>
				<div className="flex flex-col">
					<CafeCard
						name={"turket blt"}
						price={"15.00"}
						description={"lorem ipsum"}
					/>
					<CafeCard
						name={"tuna sandwich"}
						price={"11.00"}
						description={"lorem ipsum"}
					/>
					<CafeCard
						name={"veggie delight"}
						price={"10.00"}
						description={"lorem ipsum"}
					/>
				</div>
			</div>
		</section>
	);
};

export default Menu;
