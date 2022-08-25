import { React, useState, useEffect, useRef } from 'react';

import Style from './homeTop.module.scss';

export default function HomeTop() {
	const header = useRef();
	const [yScroll, setYScroll] = useState(0);

	useEffect(() => {
		const handleScroll = (event) => {
			setYScroll(window.scrollY);
			// console.log(window.scrollY);
			console.log(header.current.style);
			header.current.style.fontSize = `${40 + window.scrollY / 10}px`;
			header.current.style.opacity = `${1 / (window.scrollY / 100)}`;
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={Style.Top}>
			<div className={Style.BackgroundOne}>
				<div className={Style.Overlay}>
					<div className={Style.Content}>
						<h1 ref={header}>Life Improvements</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
