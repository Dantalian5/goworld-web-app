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
		<main className="px-mobile md:px-desktop py-6 md:py-12">
			<Filter />
			<div className="flex flex-wrap justify-evenly items-stretch mt-8 md:mt-12 gap-y-10 gap-x-14">
				{countryList}
			</div>
		</main>
	);
};

export default Main;
