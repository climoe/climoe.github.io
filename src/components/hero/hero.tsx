import React from 'react';
import { TerminalWindowIcon } from '@phosphor-icons/react';

import "./hero.module.css";

const Hero = () => {
	return (
		<div className={"hero"}>
			<a className={"logo"} href='/'>
				<TerminalWindowIcon size={'6.4rem'} />
			</a>
		</div>
	);
};

export default Hero;
