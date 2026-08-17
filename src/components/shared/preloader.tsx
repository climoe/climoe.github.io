import React from 'react';

import Loader from '@/public/images/loader.svg';
import "./shared.module.css";


const Preloader = () => {
	return (
		<section className={"preloader"}>
			<div>
				<Loader />
			</div>
		</section>
	);
};

export default Preloader;
