import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { navbarData } from '../../../data/NavbarData';

import { FaBars } from 'react-icons/fa';

import Style from './navbar.module.scss';

export default function Navbar() {
	const topRef = useRef();
	const scrollRef = useRef();

	// const [yScroll, setYScroll] = useState(0);

	useEffect(() => {
		const handleScroll = (event) => {
			console.log(topRef.current.style);
			// topRef.current.style.display = 'none';
			// if (window.scrollY === 0) {

			// }
			// setYScroll(window.scrollY);
			// console.log(window);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			{/* {yScroll === 0 ? (
				<nav className={Style.Top}>
					<div className={Style.Inner}>
						<ul>
							<li className={Style.Logo}>Life Improvements</li>
							<li>
								<FaBars className={Style.Bars} />
							</li>
							{navbarData.map((item, index) => (
								<li className={Style.Links} key={index}>
									<Link to={item.link}>
										<div>{item.title}</div>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
			) : (
				<nav className={Style.Scrolled}>
					<div className={Style.Inner}>
						<div className={Style.Bars}>
							<FaBars className={Style.Bars} />
						</div>
					</div>
				</nav>
			)} */}
			<nav className={Style.Top} ref={topRef}>
				<div className={Style.Inner}>
					<ul>
						<li className={Style.Logo}>Life Improvements</li>
						<li>
							<FaBars className={Style.Bars} />
						</li>
						{navbarData.map((item, index) => (
							<li className={Style.Links} key={index}>
								<Link to={item.link}>
									<div>{item.title}</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
			<nav className={Style.Scrolled} ref={scrollRef}>
				<div className={Style.Inner}>
					<div className={Style.Bars}>
						<FaBars className={Style.Bars} />
					</div>
				</div>
			</nav>
		</div>
	);
}
