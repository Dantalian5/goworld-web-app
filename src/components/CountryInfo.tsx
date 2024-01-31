import {useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {fetchData} from '@/utils/api';

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
const svgLoader = (
	<svg
		aria-hidden="true"
		className="w-8 h-8 animate-spin fill-dblue-300 text-dgray-200"
		viewBox="0 0 100 101"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
			fill="currentColor"
		/>
		<path
			d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
			fill="currentFill"
		/>
	</svg>
);

const CountryInfo = () => {
	const location = useLocation();
	const code = location.state;
	const [country, setCountry] = useState<any>('');
	const [loading, setLoading] = useState<boolean>(true);
	const navigate = useNavigate();
	const infoBlock = (label: string, value: string) => {
		return (
			<div className="font-semibold mb-3">
				{label}: <span className="font-light">{value}</span>
			</div>
		);
	};
	const loadData = async (value: string) => {
		setLoading(true);
		const loadedData = await fetchData(value);
		setCountry(loadedData === 'error' ? '' : loadedData[0]);
		setLoading(false);
	};
	useEffect(() => {
		loadData('alpha?codes=' + code);
	}, [location]);
	return (
		<div className="px-7 md:px-desktop py-10 md:py-20 font-nunito text-dblue-300 dark:text-white">
			{/* <Link
				to={'/'}
				className="flex items-center justify-center gap-x-2 shadow-btn px-6 md:px-10 py-1.5 md:py-2 rounded-s text-sm md:text-base dark:bg-dblue-100 w-fit">
				{svgBack} Back
			</Link> */}
			<button
				onClick={() => navigate(-1)}
				className="flex items-center justify-center gap-x-2 shadow-btn px-6 md:px-10 py-1.5 md:py-2 rounded-s text-sm md:text-base dark:bg-dblue-100 w-fit">
				{svgBack} Back
			</button>
			{loading ? (
				<div
					role="status"
					className="flex items-center justify-center w-full my-10">
					{svgLoader}
				</div>
			) : country !== '' ? (
				<div className="flex flex-wrap gap-x-[145px] gap-y-8 mt-16  md:mt-20 justify-evenly items-start">
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
							{infoBlock(
								'Currencies',
								Object.values(country.currencies)
									.map((currency: any) => currency.name)
									.join(', ')
							)}
							{infoBlock(
								'Languages',
								Object.values(country.languages).join(', ')
							)}
						</div>
						<div className="w-full flex flex-wrap items-center gap-4">
							<h4 className="text-base font-semibold">Border Countries:</h4>
							<div className="flex items-center flex-wrap gap-2.5">
								{country.borders?.map((item: string) => (
									<Link
										to={`/countries/${item}`}
										state={item}
										className="flex items-center justify-center gap-x-2 shadow-card px-4 md:px-10 py-1.5 rounded-[2px] text-xs md:text-sm dark:bg-dblue-100"
										key={item}>
										{item}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			) : (
				<h3 className="font-extrabold text-base w-full py-10 text-center">
					Ups...it seems there is an error, please, refresh the page
				</h3>
			)}
		</div>
	);
};
export default CountryInfo;
