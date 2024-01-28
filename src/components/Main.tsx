import Filter from '@/components/Filter';
import CountryCard from '@/components/CountryCard';
import data from '@/data.json';
const Main = () => {
	const countryList = data.slice(0, 7).map((country) => (
		<CountryCard
			key={country.name}
			country={country}
		/>
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
