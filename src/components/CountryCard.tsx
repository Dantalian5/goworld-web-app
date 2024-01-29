import {Link} from 'react-router-dom';

const CountryCard = ({country}: any) => {
	const {name, flags, population, region, capital, cca3} = country;
	return (
		<Link
			to={`/countries/${cca3}`}
			state={cca3}
			className="flex-card">
			<div className=" w-full h-full bg-white dark:bg-dblue-100 shadow-card rounded-s overflow-hidden cursor-pointer">
				<div className="w-full h-40 flex alignitems-center justify-center">
					<img
						src={flags.png}
						alt="the country flag"
						className="w-full"
					/>
				</div>
				<div className=" px-6 pt-6 pb-11 font-nunito text-dblue-300 dark:text-white">
					<h3 className="font-extrabold text-lg mb-4">{name.common}</h3>
					<p className="font-semibold text-sm mb-2">
						Population: <span className=" font-light">{population}</span>
					</p>
					<p className="font-semibold text-sm mb-2">
						Region: <span className=" font-light">{region}</span>
					</p>
					<p className="font-semibold text-sm">
						Capital: <span className=" font-light">{capital}</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default CountryCard;
