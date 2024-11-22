import React from 'react';
import styled from 'styled-components';
import Inter from '../../static/fonts/inter/Inter.ttf';

const DefaultInputStyle = styled.input`

    @font-face {
        font-family: 'Inter';
        src: url('${Inter}');
    }

    border: 2px black solid;
    line-height: 2em;
    font-size: 1.4em;
    margin-bottom: 1.4em;
`;

const DefaultInput = ({onChange, value}) => {
  return <DefaultInputStyle placeholder='Type company name' value={value} onChange={onChange}/>
};

export default DefaultInput;