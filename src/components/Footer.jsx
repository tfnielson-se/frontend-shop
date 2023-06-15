import { GiCoffeeBeans } from "react-icons/gi";
const Footer = () => {
	return (
		<section className="m-5">
			<div className="flex justify-between">
				<div className="text-3xl">
					<GiCoffeeBeans />
				</div>
                <div className="text-lg"> <p><span className="text-2xl">🚏</span> 1234 S. Denver St, CO</p></div>
				<div className="text-3xl">
					<GiCoffeeBeans />
				</div>
			</div>
		</section>
	);
};

export default Footer;
