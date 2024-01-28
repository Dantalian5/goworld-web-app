import {Link} from 'react-router-dom';

const CountryCard = ({country}: any) => {
	return (
		<Link
			to={`/countries/${country.name}`}
			state={country}
			className="flex-card">
			<div className=" w-full bg-white dark:bg-dblue-100 shadow-card rounded-s overflow-hidden cursor-pointer">
				<div className="w-full h-40 flex alignitems-center justify-center">
					<img
						src={country.flags.png}
						alt="the country flag"
						className="w-full"
					/>
				</div>
				<div className=" px-6 pt-6 pb-11 font-nunito text-dblue-300 dark:text-white">
					<h3 className="font-extrabold text-lg mb-4">{country.name}</h3>
					<p className="font-semibold text-sm mb-2">
						Population:{' '}
						<span className=" font-light">{country.population}</span>
					</p>
					<p className="font-semibold text-sm mb-2">
						Region: <span className=" font-light">{country.region}</span>
					</p>
					<p className="font-semibold text-sm">
						Capital: <span className=" font-light">{country.capital}</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default CountryCard;
