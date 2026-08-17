import React from 'react';

import { DotsRating } from '@/components/skills/dots-rating';
import "./skills.module.css"


export const SkillRating = ({ skillName, skillRate, skillDesc }) => {
	return (
		<article className={"skills-rating"}>
			<h5 className={"skill-name"}>{skillName}</h5>
			<DotsRating range={skillRate} />
			<p className={"skills-description"}>{skillDesc}</p>
		</article>
	);
};
