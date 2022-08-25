import { React, useState } from 'react';

import Style from './home.module.scss';
import { HomeBannerOne, HomeBannerTwo } from 'components';

export default function Home() {
	return (
		<div>
			<section className={Style.Top}>
				<div className={Style.BackgroundOne}>
					<div className={Style.Overlay}>
						<div className={Style.Content}>
							<h2>Life Improvements</h2>
						</div>
					</div>
				</div>
			</section>
			<section>
				<HomeBannerOne />
			</section>
			<section>
				<HomeBannerTwo />
			</section>
			<section>
				<HomeBannerOne />
			</section>
		</div>
	);
}
