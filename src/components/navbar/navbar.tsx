'use client';

import React, { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { LanguageSwitch } from '@/components/button/switch/language-switch';
import useSticky from '@/lib/utils/use-sticky';

export interface StickyProps {
	sticky: string;
}

const StyledNavbar = styled.nav<StickyProps>`
	position: sticky;
	top: 0;
	left: 0;
	z-index: 99;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	list-style-type: none;

	font-weight: 500;

	padding: 3rem;
	margin: 5rem 0;

	background-color: ${(props) =>
		props.sticky === 'true' ? `var(--color-white)` : 'transparent'};
	border-bottom: ${(props) =>
		props.sticky === 'true'
			? `1px solid var(--cv-color-light-grey)`
			: 'transparent'};

	animation: moveDown 0.5s ease-in-out;

	& a {
		color: var(--color-darkest);
		padding: 0.4rem;
		margin-right: 0.8rem;
		font-size: 2.4rem;

		border-style: none;
		text-decoration: none;
		cursor: pointer;
	}
`;

const Navbar = () => {
	const elementRef = useRef<HTMLElement>(null);
	const isSticky: boolean = useSticky(elementRef);
	const sticky = isSticky.toString();

	return (
		<StyledNavbar ref={elementRef} sticky={sticky}>
			<li>
				<Link href='/#about' title='About' />
			</li>
			<li>
				<Link href='/#experience' title='Career' />
			</li>
			<li>
				<Link href='/#education' title='Eductaion' />
			</li>
			<li>
				<Link href='/#technology' title='Technology' />
			</li>
			<li>
				<Link href='/#courses' title='Courses' />
			</li>
			<LanguageSwitch sticky={isSticky} />
		</StyledNavbar>
	);
};

export default Navbar;
