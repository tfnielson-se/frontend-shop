
const CafeCard = ({ name, price, description }) => {
	return (
		<section className="bring-up flex justify-around text-xl p-3 w-full shadow-xl rounded-b-xl">
			<div className="flex w-1/3">
				<p className="text-left uppercase">{name}</p>
			</div>
			<div className="m-auto hidden lg:block w-1/3">
				<p>{description}</p>
			</div>
			<div className="w-1/3 text-right">
				<p className="">${price}</p>
			</div>
			{/* <div className="m-auto">
				<SiCoffeescript />
			</div> */}
		</section>
	);
};

export default CafeCard;
