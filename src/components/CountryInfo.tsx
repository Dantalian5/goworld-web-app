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
			<div className="font-semibold mb-3">
				{label}: <span className="font-light">{value}</span>
			</div>
		);
	};
	console.log();
	return (
		<div className="px-7 md:px-desktop py-10 md:py-20 font-nunito text-dblue-300 dark:text-white">
			<Link to={'/'}>
				<button className="flex items-center justify-center gap-x-2 shadow-btn px-6 md:px-10 py-1.5 md:py-2 rounded-s text-sm md:text-base ">
					{svgBack} Back
				</button>
			</Link>
			<div className="flex flex-wrap gap-x-[145px] gap-y-8 mt-16 justify-evenly items-start">
				<div className="overflow-hidden rounded-s flex-flag">
					<img
						src={country.flags.png}
						alt={country.flags.alt}
						className="w-full"
					/>
				</div>
				<div className="flex-flag flex flex-wrap gap-y-8 justify-between">
					<h3 className="font-extrabold text-2xl lg:text-[2rem] w-full">
						{country.name.common}
					</h3>
					<div className="text-sm lg:text-base">
						{infoBlock('Native Name', country.name.official)}
						{infoBlock('Population', country.population)}
						{infoBlock('Region', country.region)}
						{infoBlock('Sub Region', country.subregion)}
						{infoBlock('Capital', country.capital)}
					</div>
					<div className="text-sm lg:text-base">
						{infoBlock('Top Level Domain', country.tld.join(', '))}
						{infoBlock('Currencies', 'yolo')}
						{infoBlock('Languages', 'yolo')}
					</div>
					<div className="w-full">
						<h4 className="text-base font-semibold">Border Countries:</h4>
						<div>{country.borders.join()}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CountryInfo;
