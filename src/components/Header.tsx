import {useEffect, useState} from 'react';

const svgMoon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		className={`absolute inset-0 -rotate-180 dark:rotate-0 origin-bottom transition-transform  ease-linear duration-300`}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z"
			fill="currentColor"
		/>
	</svg>
);
const svgSun = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		className={`absolute inset-0 dark:rotate-180 origin-bottom transition-transform  ease-linear duration-300`}>
		<circle
			cx="7.99992"
			cy="8"
			r="3.28947"
			fill="white"
			stroke="currentColor"
		/>
		<line
			x1="7.92114"
			y1="3.36842"
			x2="7.92114"
			y2="2.38419e-06"
			stroke="currentColor"
		/>
		<line
			x1="12.6316"
			y1="7.92105"
			x2="16"
			y2="7.92105"
			stroke="currentColor"
		/>
		<line
			y1="7.92105"
			x2="3.36842"
			y2="7.92105"
			stroke="currentColor"
		/>
		<line
			x1="2.17281"
			y1="13.8178"
			x2="4.55465"
			y2="11.4359"
			stroke="currentColor"
		/>
		<line
			x1="2.03788"
			y1="2.17276"
			x2="4.41971"
			y2="4.55459"
			stroke="currentColor"
		/>
		<line
			x1="11.436"
			y1="4.5546"
			x2="13.8178"
			y2="2.17276"
			stroke="currentColor"
		/>
		<line
			x1="11.3008"
			y1="11.4359"
			x2="13.6827"
			y2="13.8178"
			stroke="currentColor"
		/>
		<line
			x1="7.92114"
			y1="16"
			x2="7.92114"
			y2="12.6316"
			stroke="currentColor"
		/>
	</svg>
);
const Header = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>(
		localStorage.theme === 'dark' ? 'dark' : 'light'
	);
	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		}
	}, [theme]);
	return (
		<header className=" font-nunito flex justify-between items-center px-4 py-8 shadow-s bg-white dark:bg-dblue-100">
			<h1 className=" font-extrabold text-sm text-dblue-300 dark:text-white">
				Where in the world?
			</h1>

			<button
				className=" font-semibold text-sm flex gap-2 items-center text-dblue-300 dark:text-white"
				onClick={() =>
					setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
				}>
				<div className="relative w-4 h-4 overflow-hidden">
					{svgMoon}
					{svgSun}
				</div>
				{theme === 'light' ? 'Light' : 'Dark'} Mode
			</button>
		</header>
	);
};

export default Header;
