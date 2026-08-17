'use client';

import React, { JSX, use, useContext } from 'react';

import { LanguageContext } from '@/components/context/language-context';

import { ViteSection } from '@/components/section/vite-section';
import { SkillRating } from '@/components/skills/skill-rating';
import { ReturnProps, SkillsProps } from '@/lib/content-loading/content-types';

import "./skills.module.css";


export default function Skills({
	skillset
}: {
	skillset: Promise<ReturnProps<SkillsProps>>;
}): JSX.Element {
	const languageContext = useContext(LanguageContext);
	const skill = use(skillset);
	const { description, legend, skills } =
		languageContext.language === 'en'
			? skill.frontmatter.language.en
			: skill.frontmatter.language.pl;

	return (
		<ViteSection id='technology' title={description}>
			<div className={"skills"}>
				<section className={"category-grid"}>
					{skills.map((skill, index1) => {
						return (
							<section className={"category"} key={skill.category}>
								<h4 className={"skills-category"} key={index1}>
									{skill.category}
								</h4>
								<section className={"skills-grid"} key={skill.category}>
									{skill.items.map((item, index2) => {
										return (
											<SkillRating
												skillName={item.name}
												skillRate={item.rate}
												skillDesc={item.description}
												key={index2}
											/>
										);
									})}
								</section>
							</section>
						);
					})}
				</section>
				<p className={"skills-legend"}>{legend}</p>
			</div>
		</ViteSection>
	);
}
