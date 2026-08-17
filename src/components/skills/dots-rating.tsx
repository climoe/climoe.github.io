import React from 'react';
import { CircleWavyIcon } from '@phosphor-icons/react';
import Colors from '@/components/shared/colors';

export const DotsRating = ({ range }) => {
	return (
		<div>
			{[...Array(range)].map((item, index) => {
				return (
					<CircleWavyIcon
						size={'1rem'}
						color={Colors.PINK}
						weight='duotone'
						key={index}
					/>
				);
			})}
			{[...Array(5 - range)].map((item, index) => {
				return (
					<CircleWavyIcon
						size={'1rem'}
						color={Colors.GREY}
						weight='duotone'
						key={5 - index}
					/>
				);
			})}
		</div>
	);
};
