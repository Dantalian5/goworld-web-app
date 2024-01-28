export async function fetchData(type: 'all' | 'name' | 'code', value: string) {
	let relativeUrl;
	switch (type) {
		case 'all':
			relativeUrl = 'v3.1/all';
			break;
		case 'name':
			relativeUrl = 'v3.1/name/' + value;
			break;
		case 'code':
			relativeUrl = 'v3.1/all';
			break;
	}

	const url = new URL(relativeUrl, 'https://restcountries.com/');
	try {
		const response = await fetch(url);
		const data = await response.json();
		return await data;
	} catch (error) {
		return 'error';
	}
}
