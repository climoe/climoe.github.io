import React from 'react';
import styled, { css } from 'styled-components';

import { mediaQueries } from '@/components/common/media-queries';

import AnalyzeSvg from '@/public/images/analyze.svg';

const StyledAnalyzed = styled.div`
	flex: 1 1 50%;
	min-height: 25rem;
	align-self: center;
	margin-bottom: 2rem;

	@media (max-width: '${mediaQueries.tablet}') {
		${css`
		flex: 1 0 50%;
		min-height: 35rem;
		min-width: 55rem;
	`}
	}

	@media (max-width: '${mediaQueries.phone}') {
		${css`
		flex: 1 0 50%;
		min-height: 30rem;
		min-width: 50rem;
	`}
	}

	@media (max-width: '${mediaQueries.sphone}') {
		${css`
		display: none;
	`}
	}

	@media print {
		${css`
		display: none;
	`}
	}
`;

export default function Analyze() {
	return (
		<StyledAnalyzed>
			<AnalyzeSvg />
		</StyledAnalyzed>
	);
}
