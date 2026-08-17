import React from 'react';
import { CheckCircleIcon, HourglassIcon } from '@phosphor-icons/react';

import {useCssVar} from "@/lib/utils/use-others";


export const Course = ({ name, owner, description, realized }) => {

	const PURPLE = useCssVar('--color-purple');
	return (
		<article className={"course"}>
			{realized === true ? (
				<i className={"course-completion"}>
					<CheckCircleIcon size={'2rem'} color={PURPLE} />
				</i>
			) : (
				<i className={"course-completion"}>
					<HourglassIcon size={'2rem'} color={PURPLE} />
				</i>
			)}
			<p className={"course-name"}>
				{name} - <span className={"course-description"}>{description}</span>
				<span className={"course-owner"}>{owner}</span>
			</p>
		</article>
	);
};
