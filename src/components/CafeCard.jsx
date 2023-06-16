
const CafeCard = ({ name, price, description }) => {
	return (
		<section className="flex justify-around text-2xl p-3 w-full shadow-xl rounded-xl">
			<div className="flex">
				<p className="text-left uppercase">{name}</p>
			</div>
			<div className="m-auto hidden lg:block">
				<p>{description}</p>
			</div>
			<div className="">
				<p className="">${price}</p>
			</div>
			{/* <div className="m-auto">
				<SiCoffeescript />
			</div> */}
		</section>
	);
};

export default CafeCard;
