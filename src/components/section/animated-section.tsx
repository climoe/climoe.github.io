'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import "./section.module.css";

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
		<section className={"animated"}>
			<motion.div
				className='controls'
				ref={ref}
				animate={controls}
				initial='hidden'
				variants={squareVariants}>
				{children}
			</motion.div>
		</section>
	);
}
