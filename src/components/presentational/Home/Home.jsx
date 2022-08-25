import { React } from 'react';

import Style from './home.module.scss';
import { HomeTop, HomeBannerOne, HomeBannerTwo } from 'components';

export default function Home() {
	return (
		<div>
			<HomeTop />
			<HomeBannerOne />
			<HomeBannerTwo />
			<HomeBannerOne />
		</div>
	);
}
