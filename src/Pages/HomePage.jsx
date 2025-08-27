import { Link } from "react-router-dom";

export const HomePage = () => {
	return (
		<header className="flex items-center justify-between gap-3 py-4 bg-gray-100">
			<div className="flex flex-col gap-2 pl-6 max-w-[250px] sm:max-w-[400px] sm:pl-8 md:pl-15">
				<h1 className="text-2xl leading-7  sm:text-4xl sm:leading-none">
					Lessons and insights <span className="text-green-700">from 8 years</span>
				</h1>
				<p className="text-[6px] text-gray-400 sm:text-[10px]">
					Where to grow your business as a photographer: site or social media?
				</p>
				<Link
					className="text-[8px] bg-green-600 text-white max-w-[60px] text-center rounded-xs px-2 py-2 sm:text-[10px] sm:max-w-[80px] sm:px-4"
					to="/register"
				>
					Register
				</Link>
			</div>
			<img
				className="w-[250px] pr-2 sm:w-[400px] sm:pr-4 md:pr-12"
				src="/src/assets/header-image.svg"
				alt="Screen with some layouts and a man with a laptop."
			/>
		</header>
	);
};
