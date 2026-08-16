'use client';

import React, { JSX, use, useContext } from 'react';
import styled from 'styled-components';

import { LanguageContext } from '@/components/context/language-context';
import { ViteSection } from '@/components/section/vite-section';
import { Course } from '@/components/courses/course';
import { CourseListProps, ReturnProps } from '@/lib/content-loading/content-types';

const CourseListStyle = styled.ul`
	list-style: none;
	margin-bottom: 0.8rem;
	padding-inline-start: 0;
`;

export default function CourseList({
	courses
}: {
	courses: Promise<ReturnProps<CourseListProps>>;
}): JSX.Element {
	const languageContext = useContext(LanguageContext);
	const c = use(courses);
	const { label, items } =
		languageContext.language === 'en'
			? c.frontmatter.language.en
			: c.frontmatter.language.pl;

	return (
		<ViteSection id='courses' title={label}>
			<CourseListStyle>
				{items.map((item, index) => {
					return (
						<Course
							name={item.name}
							owner={item.owner}
							description={item.description}
							realized={item.realized}
							key={index}
						/>
					);
				})}
			</CourseListStyle>
		</ViteSection>
	);
}
