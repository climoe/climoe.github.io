import React from "react";
import styled from "styled-components";

import Colors from "../common/Colors";

const TechnologyStyle = styled.span`
    
        border: 1px solid ${Colors.PINK};
        border-radius: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        margin-right: .5rem;
        margin-top: .5rem;
        padding: .5rem;
        line-height: 1.6;
    `;

export const Technology = ({name}) => {

    return (
        <TechnologyStyle>{name}</TechnologyStyle>
    )

}