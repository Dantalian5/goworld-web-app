export async function fetchData(value: string) {
	const relativeUrl = 'v3.1/' + value;
	const url = new URL(relativeUrl, 'https://restcountries.com/');
	try {
		const response = await fetch(url);
		const data = await response.json();
		return await data;
	} catch (error) {
		return 'error';
	}
}
