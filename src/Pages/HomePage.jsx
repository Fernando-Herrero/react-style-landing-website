import { Link } from "react-router-dom";

const imagesSectionTwo = [
	"/src/assets/logo-1-2sec.svg",
	"/src/assets/logo-2-2sec.png",
	"/src/assets/logo-3-2sec.svg",
	"/src/assets/logo-4-2sec.svg",
	"/src/assets/logo-5-2sec.svg",
	"/src/assets/logo-6-2sec.svg",
	"/src/assets/logo-7-2sec.svg",
];

export const HomePage = () => {
	return (
		<>
			<header className="py-10 bg-gray-100">
				<div className="flex items-center pl-10 pr-2 sm:gap-2 md:pl-15">
					<div className="flex flex-col gap-2 max-w-[250px] sm:max-w-[350px] md:max-w-[450px]">
						<h1 className="text-2xl leading-7  sm:text-4xl sm:leading-none md:text-6xl">
							Lessons and insights <span className="text-green-700">from 8 years</span>
						</h1>
						<p className="text-[6px] text-gray-400 sm:text-[10px] md:text-[12px]">
							Where to grow your business as a photographer: site or social media?
						</p>
						<Link
							className="text-[8px] bg-green-600 text-white max-w-[60px] text-center rounded-xs px-2 py-2 hover:bg-green-700 transform transition-transform duration-300 hover:-translate-y-0.25 sm:text-[10px] sm:max-w-[80px] sm:px-4"
							to="/register"
						>
							Register
						</Link>
					</div>
					<img
						className="w-[200px] ml-auto sm:w-[300px]"
						src="/src/assets/header-image.svg"
						alt="Screen with some layouts and a man with a laptop."
					/>
				</div>
			</header>
			<section className="flex flex-col items-center gap-4 pl-10 pb-8 pt-4 pr-2 md:pl-15">
				<div className="flex flex-col gap-1">
					<h2 className="text-center text-lg text-gray-600 sm:text-2xl md:text-4xl">Our Clients</h2>
					<p className="text-[6px] text-gray-400 sm:text-[10px] md:text-[12px]">
						We have been working with some Fortune 500+ clients
					</p>
				</div>
				<div className="flex justify-between items-center w-full">
					{imagesSectionTwo.map((img, i) => (
						<img className="sm:w-7 md:w-10" key={i} src={img} alt="logo-bussines" />
					))}
				</div>
			</section>
			<section className="flex flex-col gap-4 pl-10 pb-8 pr-2 md:pl-15">
				<div className="flex flex-col items-center gap-1 min-h">
					<h2 className="max-w-2xs text-center text-lg text-gray-600 sm:text-2xl sm:max-w-xs md:text-4xl md:max-w-lg">
						Manage your entire community in a single system
					</h2>
					<p className="text-[6px] text-gray-400 sm:text-[10px] md:text-[12px]">
						Who is Nextcent suitable for?
					</p>
				</div>
				<div className="flex justify-between gap-1 items-center w-full h-30 sm:h-40 md:h-50">
					<div className="h-full flex flex-col items-center gap-1 max-w-[180px] text-center p-2 shadow-[-1px_2px_1px_rgba(0,0,0,0.1)]">
						<div className="flex flex-col items-center gap-1">
							<img src="/src/assets/icon-profile-sec3.svg" alt="icon of a group of three people" />
							<h3 className="max-w-[100px] text-sm text-gray-600  md:text-lg">
								Membership Organisations
							</h3>
						</div>
						<p className="text-[6px] text-gray-400 sm:text-[10px] md:text-[12px]">
							Our membership management software provides full automation of membership renewals and
							payments
						</p>
					</div>
					<div className="h-full flex flex-col items-center gap-1 max-w-[180px] text-center p-2 shadow-[-1px_2px_1px_rgba(0,0,0,0.1)]">
						<div className="flex flex-col items-center gap-1">
							<img src="/src/assets/icon-building-sec3.svg" alt="icon of buildings" />
							<h3 className="max-w-[100px] text-sm text-gray-600 md:text-lg">National Associations</h3>
						</div>

						<p className="text-[6px] text-gray-400 sm:text-[10px] md:text-[12px]">
							Our membership management software provides full automation of membership renewals and
							payments
						</p>
					</div>
					<div className="h-full flex flex-col items-center gap-1 max-w-[180px] text-center p-2 shadow-[-1px_2px_1px_rgba(0,0,0,0.1)]">
						<div className="flex flex-col items-center gap-1 max-w-[100px] sm:max-w-xs">
							<img src="/src/assets/icon-hands-sec3.svg" alt="icon of grouo of hands" />
							<h3 className="max-w-[100px] text-sm text-gray-600 md:text-lg">Clubs And Groups</h3>
						</div>

						<p className="text-[6px] text-gray-400 sm:text-[10px] md:text-[12px]">
							Our membership management software provides full automation of membership renewals and
							payments
						</p>
					</div>
				</div>
			</section>
			<section className="flex justify-center items-center gap-4 pl-10 pb-8 pr-2 md:pl-15">
				<img
					className="sm:w-3xl"
					src="/src/assets/mobile-login/rafiki.svg"
					alt="image ofa a guy showing a mobile layaot to a seated girl"
				/>
				<article className="flex flex-col gap-2 max-w-[300px] sm:max-w-[350px] md:max-w-[400px]">
					<h2 className="max-w-2xs text-lg text-gray-600 leading-tight sm:text-2xl sm:max-w-xs md:text-4xl md:max-w-md">
						The unseen of spending three years at Pixelgrade
					</h2>
					<p className="text-[6px] text-gray-400 sm:text-[10px] md:text-[12px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan
						quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
						tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar,
						aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
					</p>
					<Link className="text-[8px] bg-green-600 text-white max-w-[80px] text-center rounded-xs px-2 py-2 hover:bg-green-700 transform transition-transform duration-300 hover:-translate-y-0.25 sm:text-[10px] sm:max-w-[100px] sm:px-4">
						Learn More
					</Link>
				</article>
			</section>
			<section className="bg-gray-100 py-4 pl-10 pr-2 md:pl-15">
				<div className="flex items-center justify-between">
					<div className="max-w-[300px] sm:max-w-[400px]">
						<h2 className=" flex flex-col max-w-2xs text-lg text-gray-600 leading-tight sm:text-2xl sm:max-w-xs md:text-4xl md:max-w-md">
							Helping a local <span className="text-green-600">business reinvent itself</span>
						</h2>
						<p className="text-[6px] sm:text-[10px] md:text-[12px]">
							We reached here with our hard work and dedication
						</p>
					</div>
					<div className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-3">
						<div className="flex items-center gap-1">
							<img
								className="sm:w-[40px]"
								src="/src/assets/icon-twopeople-graysec.svg"
								alt="icon two faces"
							/>
							<div className="flex flex-col">
								<span className="text-xs sm:text-lg">2,245,341</span>
								<p className="text-[6px] text-gray-400 sm:text-[10px] md:text-[12px]">Members</p>
							</div>
						</div>
						<div className="flex items-center gap-1">
							<img
								className="sm:w-[40px]"
								src="/src/assets/icon-dontknow-graysec.svg"
								alt="icon three hands pointing each other"
							/>
							<div className="flex flex-col">
								<span className="text-xs sm:text-lg">46,328</span>
								<p className="text-[6px] text-gray-400 sm:text-[10px] md:text-[12px]">Clubs</p>
							</div>
						</div>
						<div className="flex items-center gap-1">
							<img
								className="sm:w-[40px]"
								src="/src/assets/icon-finger-graysec.svg"
								alt="icon of a finger"
							/>
							<div className="flex flex-col">
								<span className="text-xs sm:text-lg">828,867</span>
								<p className="text-[6px] text-gray-400 sm:text-[10px] md:text-[12px]">Event Bookings</p>
							</div>
						</div>
						<div className="flex items-center gap-1">
							<img
								className="sm:w-[40px]"
								src="/src/assets/icon-wallet-graysec.svg"
								alt="icon of a wallet"
							/>
							<div className="flex flex-col">
								<span className="text-xs sm:text-lg">1,926,436</span>
								<p className="text-[6px] text-gray-400 sm:tet-[10px] md:text-[12px]">Payments</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
