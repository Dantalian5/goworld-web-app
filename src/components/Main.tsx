import {useEffect, useState} from 'react';
import Filter from '@/components/Filter';
import CountryCard from '@/components/CountryCard';
import {fetchData} from '@/utils/api';
const Main = () => {
	const [data, setData] = useState<any>([]);
	const loadData = async (
		type: 'all' | 'name' | 'code',
		value: string = ''
	) => {
		const loadedData = await fetchData(type, value);
		setData(loadedData === 'error' ? [] : loadedData);
	};
	useEffect(() => {
		loadData('all');
	}, []);

	const countryList = data.slice(0, 7).map((country: any) => (
		<CountryCard
			key={country.name.common}
			country={country}
		/>
	));
	const changeFilter = (filter: any) => {
		console.log(filter);
	};
	return (
		<main className="px-mobile md:px-desktop py-6 md:py-12">
			<Filter filterFn={changeFilter} />
			<div className="flex flex-wrap justify-evenly items-stretch mt-8 md:mt-12 gap-y-10 gap-x-14">
				{countryList.length > 0 ? countryList : 'No data found'}
			</div>
		</main>
	);
};

export default Main;
