import { GiCoffeeBeans } from "react-icons/gi";
const Footer = () => {
	return (
		<section className="m-5">
			<div className="flex justify-between">
				<div className="text-2xl">
					<GiCoffeeBeans />
				</div>
                <div className="text-sm"> <p>Designed by Point.Break Software Engineering</p></div>
				<div className="text-2xl">
					<GiCoffeeBeans />
				</div>
			</div>
		</section>
	);
};

export default Footer;
