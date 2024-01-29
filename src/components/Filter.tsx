import {useEffect, useState} from 'react';

const svgSearch = (
	<svg
		className=" opacity-50 dark:opacity-100"
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z"
			fill="currentColor"
		/>
	</svg>
);
const svgArrow = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="10"
		height="10"
		viewBox="0 0 10 10"
		fill="none">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z"
			fill="currentColor"
		/>
	</svg>
);
type FilterType = {
	country: string;
	region: 'none' | 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
};

const Filter = ({filterFn}: any) => {
	const [filter, setFilter] = useState<FilterType>({
		country: '',
		region: 'none',
	});
	const [regionState, setRegionState] = useState<boolean>(false);

	const onSubmit = (e: any) => {
		e.preventDefault();
		filterFn(filter);
	};
	useEffect(() => {
		filterFn(filter);
	}, [filter]);
	const selectRegion = (e: any) => {
		setFilter((prev) => ({
			...prev,
			region: e.target.innerText === '-- All --' ? 'none' : e.target.innerText,
		}));
		setRegionState(false);
	};
	const listItems = [
		'none',
		'Africa',
		'Americas',
		'Asia',
		'Europe',
		'Oceania',
	].map((item) => (
		<li
			key={item}
			onClick={selectRegion}
			className=" cursor-pointer">
			{item === 'none' ? '-- All --' : item}
		</li>
	));
	return (
		<form
			onSubmit={onSubmit}
			className=" font-nunito font-normal text-xs lg:text-sm text-dblue-300 dark:text-white flex flex-wrap justify-between items-center gap-10">
			<div className="flex flex-auto max-w-[480px]  gap-6 items-center relative bg-white dark:bg-dblue-100 rounded-s px-8">
				{/* <label
					htmlFor="country-filter"
					className="absolute top-1/2 -translate-y-1/2">
					Search for a country…
				</label> */}
				{svgSearch}
				<input
					className=" py-4 grow outline-none dark:bg-dblue-100 dark:text-white"
					type="text"
					id="country-filter"
					value={filter.country}
					onChange={(e) =>
						setFilter((prev) => ({...prev, country: e.target.value}))
					}
					placeholder="Search for a country…"
				/>
			</div>
			<div className="relative">
				<div
					className="flex items-center justify-between gap-x-[62px] min-w-[200px] px-6 py-4 bg-white dark:bg-dblue-100 rounded-s cursor-pointer"
					onClick={() => setRegionState((prev) => !prev)}>
					{filter.region === 'none' ? 'Filter by Region' : filter.region}
					{svgArrow}
				</div>
				<ul
					className={`absolute w-full -bottom-1 translate-y-full bg-white dark:bg-dblue-100 rounded-s px-6 py-4 flex flex-col gap-y-2 ${
						regionState ? 'flex' : 'hidden'
					}`}>
					{listItems}
				</ul>
			</div>
		</form>
	);
};

export default Filter;

// todo : importante finalizar filtro on main.
