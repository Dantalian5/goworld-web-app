import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '@/components/Header';
import Main from '@/components/Main';
import CountryInfo from '@/components/CountryInfo';

function App() {
	return (
		<div className=" bg-dgray-100 min-h-svh">
			<Header />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Main />}></Route>
					<Route
						path="/info"
						element={<CountryInfo />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
