'use client';

import React, { JSX, use, useContext } from 'react';

import { LanguageContext } from '@/components/context/language-context';
import { LanguageProps, ReturnProps } from '@/lib/content-loading/content-types';

import "./shared.module.css";

export default function MainTitle({
	mainTitle
}: {
	mainTitle: Promise<ReturnProps<LanguageProps>>;
}): JSX.Element {
	const languageContext = useContext(LanguageContext);
	const title = use(mainTitle);
	const { first, second } =
		languageContext.language === 'en'
			? title.frontmatter.language.en
			: title.frontmatter.language.pl;

	return (
		<p className={"main-title"}>
			{first} <span> {second} </span>
		</p>
	);
}
