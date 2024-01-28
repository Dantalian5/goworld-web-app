import Filter from '@/components/Filter';
import CountryCard from '@/components/CountryCard';
import data from '@/data.json';
import {Link} from 'react-router-dom';
const Main = () => {
	const countryList = data.slice(0, 7).map((country) => (
		<Link to={`/info`}>
			<CountryCard
				key={country.name}
				data={country}
			/>
		</Link>
	));
	return (
		<main className="px-4 py-6">
			<Filter />
			<div className="flex flex-wrap justify-center items-center mt-8 gap-y-10">
				{countryList}
			</div>
		</main>
	);
};

export default Main;
