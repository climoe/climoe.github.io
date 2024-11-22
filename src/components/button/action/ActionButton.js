import React from 'react';
import styled from "styled-components"

const ActionButtonStyle = styled.button`
    padding: 10px;
    border: 2px solid black;
    
`;

const ActionButton = ({name, onClick}) => {
    return (
    <ActionButtonStyle name={name} onClick={onClick} />
    )
}

export default ActionButton;