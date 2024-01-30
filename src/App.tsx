import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '@/components/Header';
import Main from '@/components/Main';
import CountryInfo from '@/components/CountryInfo';

type FilterType = {
	country: string;
	region: 'none' | 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';
};
function App() {
	const [filter, setFilter] = useState<FilterType>({
		country: '',
		region: 'none',
	});
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
		localStorage.theme = 'dark';
	} else {
		document.documentElement.classList.remove('dark');
		localStorage.theme = 'light';
	}

	return (
		<div className=" bg-dgray-100 dark:bg-dblue-200 min-h-svh">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<Main
								filter={filter}
								setFilter={setFilter}
							/>
						}></Route>
					<Route
						path="/countries/:id"
						element={<CountryInfo />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
