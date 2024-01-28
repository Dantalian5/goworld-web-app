import {useEffect, useState} from 'react';
import Filter from '@/components/Filter';
import CountryCard from '@/components/CountryCard';
import {fetchData} from '@/utils/api';
type FilterType = {
	country: string;
	region: 'none' | 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';
};
const Main = () => {
	const [data, setData] = useState<any>([]);
	const [dataArray, setDataArray] = useState<any>([]);
	const [loadNumber, setLoadNumber] = useState<number>(8);
	const [filter, setFilter] = useState<FilterType>({
		country: '',
		region: 'none',
	});
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
	useEffect(() => {
		setDataArray(data);
	}, [data]);
	useEffect(() => {
		setDataArray(
			data.filter((item: any) => {
				if (
					item.name.common.toLowerCase().includes(filter.country.toLowerCase())
				) {
					if (filter.region === 'none' || item.region === filter.region) {
						return true;
					}
				}
			})
		);
	}, [filter]);

	return (
		<main className="px-mobile md:px-desktop py-6 md:py-12">
			<Filter filterFn={setFilter} />
			<div className="flex flex-wrap justify-evenly items-stretch mt-8 md:mt-12 gap-y-10 gap-x-14">
				{dataArray.length > 0
					? dataArray.slice(0, loadNumber).map((country: any) => (
							<CountryCard
								key={country.name.common}
								country={country}
							/>
					  ))
					: 'No data found'}
			</div>
			<button onClick={() => setLoadNumber((prev) => prev + 8)}>
				load more
			</button>
		</main>
	);
};

export default Main;

// todo: add load more button
// todo: repair on back return to default state
