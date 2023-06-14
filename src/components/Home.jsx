import cafeImg from '../public/cafe.jpg'
const Home = () => {
	return (
		<section className="">
				<div className="w-full lg:w-1/2 m-0 lg:m-10 rounded-3xl p-5">
					<p className='tracking-widest leading-loose'>{"Welcome to Café Ole!, where exquisite coffee awaits. Our passion and expertise bring you a range of flavors to savor. From expertly roasted beans to handcrafted beverages, every sip is a moment of pure delight. Join us in our cozy atmosphere and experience coffee at its finest."}</p>
				</div>
			<div className="flex flex-wrap justify-around border-2 ">
				<div className="w-full lg:w-1/2 flex">
					<img src={cafeImg} alt="coffee image" className='lg:rounded-3xl'/>
				</div>
			</div>
		</section>
	);
};

export default Home;
