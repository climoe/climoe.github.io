import React from "react";
import styled from "styled-components";

import Colors from "../common/Colors";

export const Technology = ({name}) => {

    const TechnologyStyle = styled.span`
    
        border: 2px solid ${Colors.PINK};
        border-radius: 1rem;
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: .5rem;
        margin-top: .5rem;
        padding: .5rem;
        line-height: 1.6;
    `;

    return (
        <TechnologyStyle>{name}</TechnologyStyle>
    )

}