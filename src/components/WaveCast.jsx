import { useEffect, useState } from "react";
import { BsTsunami } from "react-icons/bs";
import _ from "lodash";

const WaveCast = () => {
	const [forecast, setForecast] = useState("");
	const [maxWaveHeight, setMaxWaveHeight] = useState("");
	const [timeOfMaxWaveHeight, setTimeOfMaxWaveHeight] = useState("");

	useEffect(() => {
		fetch(
			"https://marine-api.open-meteo.com/v1/marine?latitude=34.21&longitude=-77.80&hourly=wave_height&length_unit=imperial"
		)
			.then((r) => r.json())
			.then((waveData) => {
				setForecast(waveData.hourly);
				waveMaxData();
			});
	}, []);

	const waveMaxData = () => {
		setMaxWaveHeight(_.max(forecast.wave_height, maxWaveHeight));
		console.log(maxWaveHeight);
		// const maxWaveTimeIndex = forecast.wave_height.indexOf(maxWaveHeight);
		// console.log(maxWaveTimeIndex);
		// setTimeOfMaxWaveHeight(forecast.time[165]);
	};

	const renderForecast =
		forecast === "" ? (
			<p>Loading Data...</p>
		) : (
			<div className="flex m-5 lg:h-24 border-4 rounded-sm">
				<p className="text-3xl m-auto">
					<BsTsunami />
				</p>
				<p className="text-3xl m-auto">
					date / time {timeOfMaxWaveHeight}
				</p>
				<p className="text-3xl m-auto">forecast{maxWaveHeight}</p>
			</div>
		);
console.log(forecast);
	return <section>{renderForecast}</section>;
};

export default WaveCast;
