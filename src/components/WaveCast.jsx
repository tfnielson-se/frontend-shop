import { useEffect, useState } from "react";
import { BsTsunami } from "react-icons/bs";
import _ from "lodash";

const WaveCast = ({ forecast }) => {
	forecast === undefined ? console.log("nada") : console.log(forecast);
	return (
		<>
			{forecast === undefined ? (
				<p> Loading... </p>
			) : (
				<section>
					<div className="flex flex-col m-5  rounded-sm lg:w-1/3 p-2">
						<div className="text-3xl border-b-2">
							<p>☕️ Daily Local Swell 📈</p>
						</div>
                        <div>
						<p className="text-xl m-auto">
							📆 Date: {forecast.time[0]}
						</p>
						<p className="text-xl m-auto">
							🌊 Swell Max: {forecast.swell_wave_height_max[0]} ft
						</p>
                        </div>
					</div>
				</section>
			)}
		</>
	);
};

export default WaveCast;
