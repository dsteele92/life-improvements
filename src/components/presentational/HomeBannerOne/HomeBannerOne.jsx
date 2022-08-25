import { React, useState } from 'react';

import Style from './homeBannerOne.module.scss';

export default function HomeBannerOne() {
	return (
		<div>
			<div className={Style.Background}>
				<div className={Style.Overlay}>
					<div className={Style.Content}>
						<p>
							Life Improvements, LLC was created to help others improve their daily lives. This could be
							as simple as updating a room with paint or as complex as renovating your entire home. You
							may even opt for finding a new home.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
