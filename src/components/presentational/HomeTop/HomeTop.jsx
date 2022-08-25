import { React, useState } from 'react';

import Style from './homeTop.module.scss';

export default function HomeTop() {
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
