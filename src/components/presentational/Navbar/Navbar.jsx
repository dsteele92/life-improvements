import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { navbarData } from '../../../data/NavbarData';

import { FaBars } from 'react-icons/fa';

import Style from './navbar.module.scss';

export default function Navbar() {
	const [yScroll, setYScroll] = useState(0);

	useEffect(() => {
		const handleScroll = (event) => {
			setYScroll(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			<nav className={yScroll === 0 ? Style.TopNav : Style.TopDisappear}>
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
			<nav className={yScroll === 0 ? Style.ScrollingNav : Style.ScrollingAppear}>
				<div className={Style.Inner}>
					<FaBars className={Style.Bars} />
				</div>
			</nav>
		</div>
	);
}
