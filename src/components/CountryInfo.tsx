import {Link, useLocation} from 'react-router-dom';

const svgBack = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="18"
		height="18"
		viewBox="0 0 18 18"
		fill="none">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
			fill="currentColor"
		/>
	</svg>
);

const CountryInfo = () => {
	const country = useLocation().state;
	const infoBlock = (label: string, value: string) => {
		return (
			<div className="text-sm font-semibold mb-3">
				{label}: <span className="font-light">{value}</span>
			</div>
		);
	};
	console.log();
	return (
		<div className="px-7 py-10 font-nunito text-dblue-300 dark:text-white">
			<Link to={'/'}>
				<button className="flex items-center justify-center gap-x-2 shadow-btn px-6 py-1.5">
					{svgBack} Back
				</button>
			</Link>
			<div className="overflow-hidden rounded-s mt-16 mb-8">
				<img
					src={country.flags.png}
					alt="country's flag"
					className="w-full"
				/>
			</div>
			<h3 className="font-extrabold text-2xl mb-6">{country.name}</h3>
			<div className="mb-8">
				{infoBlock('Native Name', country.nativeName)}
				{infoBlock('Population', country.population)}
				{infoBlock('Region', country.region)}
				{infoBlock('Sub Region', country.subregion)}
				{infoBlock('Capital', country.capital)}
			</div>
			<div className="mb-8">
				{infoBlock('Top Level Domain', country.topLevelDomain)}
				{infoBlock(
					'Currencies',
					country.currencies.map((item: any) => item.name).join(', ')
				)}
				{infoBlock(
					'Languages',
					country.languages.map((item: any) => item.name).join(', ')
				)}
			</div>
			<div>
				<h4 className="text-base font-semibold">Border Countries:</h4>
				<div>{country.borders.join()}</div>
			</div>
		</div>
	);
};

export default CountryInfo;
