import React from 'react';
import styled from 'styled-components';

const DefaultInputStyle = styled.input`
    border: 2px black solid;
    border-radius: 45%;
    padding: 10px;
`;

const DefaultInput = ({onChange, value}) => {
  return <DefaultInputStyle placeholder='Type company name' value={value} onChange={onChange}/>
};

export default DefaultInput;