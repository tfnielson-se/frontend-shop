import cafeImg from "../public/cafe.jpg";

// strecth goal
import WaveCast from "./WaveCast"; 

const Home = () => {
	return (
        <>
		<section className="flex flex-col lg:flex-row lg:h-96">
			<div className="w-full lg:w-2/3 p-5 lg:border-4 rounded-sm shadow-xl m-auto">
				<p className="tracking-widest leading-loose text-xl">
					Welcome to{" "}
					<span className="title border-b-2 border-l-2 px-1 border-yellow-300">
						CaféOle!
					</span>
					, where exquisite coffee awaits. Our passion and expertise
					bring you a range of flavors to savor. From expertly roasted
					beans to handcrafted beverages, every sip is a moment of
					pure delight. Join us in our cozy atmosphere and experience
					coffee at its finest.
				</p>
			</div>
			<div className="flex flex-wrap justify-around lg:w-1/2">
				<img
					src={cafeImg}
					alt="coffee image"
					className="lg:rounded-sm lg:h-96"
				/>
			</div>
		</section>

        {/* <WaveCast/> */}
            </>
	);
};

export default Home;
