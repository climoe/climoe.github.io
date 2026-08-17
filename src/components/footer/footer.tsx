import React from 'react';
import { AtomIcon, HeartStraightIcon, PrinterIcon } from '@phosphor-icons/react';

import {useCssVar} from "@/lib/utils/use-others";
import './footer.module.css'



export const Footer = ({ handlePrint }) => {
	const PINK = useCssVar('--color-pink')
	const ROYAL = useCssVar('--color-royal')
	return (
		<div className={"footer"}>
			<div className={"content"}>
				<p className={"content-by"}>
					Content made with{' '}
					<HeartStraightIcon size={'2rem'} color={PINK}/> and{' '}
					<AtomIcon size={'2rem'} color={ROYAL} />
				</p>
				<p className={"copyright"}>
					©climoe 2026. All rights reserved.
					<PrinterIcon
						size={'2rem'}
						color={PINK}
						weight='duotone'
						onClick={handlePrint}
					/>
				</p>
			</div>
		</div>
	);
};

export default Footer;
