const CountryCard = ({data}: any) => {
	const country = {
		flag: data.flags.png,
		name: data.name,
		population: data.population,
		region: data.region,
		capital: data.capital,
	};
	return (
		<div className="flex-[0_1_16.5rem] bg-white shadow-card rounded-s overflow-hidden cursor-pointer">
			<div className="">
				<img
					src={country.flag}
					alt="the country flag"
					className="w-full"
				/>
			</div>
			<div className=" px-6 pt-6 pb-11 font-nunito text-dblue-300">
				<h3 className="font-extrabold text-lg mb-4">{country.name}</h3>
				<p className="font-semibold text-sm mb-2">
					Population: <span className=" font-light">{country.population}</span>
				</p>
				<p className="font-semibold text-sm mb-2">
					Region: <span className=" font-light">{country.region}</span>
				</p>
				<p className="font-semibold text-sm mb-2">
					Capital: <span className=" font-light">{country.capital}</span>
				</p>
			</div>
		</div>
	);
};

export default CountryCard;
