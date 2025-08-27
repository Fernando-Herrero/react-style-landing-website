import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
	return (
		<nav className={styles.container}>
			<img className="w-16" src="/src/assets/nexcent-main-logo.svg" alt="Nexcent logo" />
			<div className="flex items-center gap-0.5">
				<NavLink
					className={({ isActive }) =>
						`cursor-pointer text-[8px] rounded-xs mr-2 px-1 py-1 hover:bg-gray-300 ${
							isActive ? `bg-gray-300` : ``
						}`
					}
					to="/home"
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`cursor-pointer text-[8px] rounded-xs px-1 py-1 hover:bg-gray-300 ${
							isActive ? `bg-gray-300` : ``
						}`
					}
					to="/features"
				>
					Features
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`cursor-pointer text-[8px] rounded-xs px-1 py-1 hover:bg-gray-300 ${
							isActive ? `bg-gray-300` : ``
						}`
					}
					to="/community"
				>
					Community
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`cursor-pointer text-[8px] rounded-xs px-1 py-1 hover:bg-gray-300 ${
							isActive ? `bg-gray-300` : ``
						}`
					}
					to="/blog"
				>
					Blog
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`cursor-pointer text-[8px] rounded-xs px-1 py-1 hover:bg-gray-300 ${
							isActive ? `bg-gray-300` : ``
						}`
					}
					to="/pricing"
				>
					Pricing
				</NavLink>
				<NavLink
					className="cursor-pointer flex text-[8px] bg-green-600 px-1.5 py-1 rounded-xs text-white hover:bg-green-900 transition duration-500 ease-in-out"
					to="/register"
				>
					Register Now <img src="/src/assets/Arrows & Directions/Right-arrow.svg" alt="right-arrow" />
				</NavLink>
			</div>
		</nav>
	);
};
