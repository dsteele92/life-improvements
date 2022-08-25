import { React, useState } from 'react';

import Style from './homeBannerTwo.module.scss';

export default function HomeBannerTwo() {
	return (
		<div>
			<div className={Style.Background}>
				<div className={Style.Overlay}>
					<div className={Style.Content}></div>
				</div>
			</div>
		</div>
	);
}
