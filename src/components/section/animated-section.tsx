'use client';

import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { mediaQueries } from '@/components/common/media-queries';

const AnimatedSectionStyle = styled.div`
	margin: 0;

	@media (max-width: '${mediaQueries.tablet}') {
		${css`
		margin: 0 0 2rem;
	`}
	}

	.controls {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-around;

		@media (max-width: '${mediaQueries.tablet}') {
			${css`
			flex-direction: column;
		`}
		}
	}

	@media print {
		${css`
		margin: 0;
	`}
	}
`;

const squareVariants: Variants = {
	visible: {
		opacity: 1,
		transition: { duration: 1, type: 'tween', velocity: 5 },
		transform: 'matrix(1,0,0,1,0,0)'
	},
	hidden: { opacity: 0, transform: 'matrix(1,0,0,1,0,20)' }
};

export function AnimatedSection({ children }) {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<AnimatedSectionStyle>
			<motion.div
				className='controls'
				ref={ref}
				animate={controls}
				initial='hidden'
				variants={squareVariants}>
				{children}
			</motion.div>
		</AnimatedSectionStyle>
	);
}
