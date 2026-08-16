import React from 'react';
import styled from 'styled-components';
import Colors from '@/components/common/colors';

const DefaultInputStyle = styled.input`
	@font-face {
		font-family: 'Inter';
	}

	border-radius: 4px;
	border-color: ${Colors.GREY};
	line-height: 2em;
	font-size: 1.4em;
	margin: 0.4em 0.8em;
`;

const DefaultInput = ({ onChange, value }) => {
	return (
		<DefaultInputStyle
			placeholder='Type company name'
			value={value}
			onChange={onChange}
		/>
	);
};

export default DefaultInput;
