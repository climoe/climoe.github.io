import React from "react";
import styled from "styled-components";
import { DotsRating } from "./DotsRating";

import Colors from "../common/Colors";

export const SkillRating = ({skillName, skillRate, skillDesc}) => {
    
    const SkillRatingStyle = styled.article`
        border-radius: 3rem;
        padding: 2rem 1rem;
    `;

    const SkillNameStyle = styled.h5`
        font-size: 2rem;
        font-weight: 700;
        margin: 0 0 .8rem;
    `;

    const SkillDescStyle = styled.p`
        font-size: 1.2rem;
        font-weight: 300;
        color: ${Colors.GREY};
        margin: 0;
    `;

    return (
        <SkillRatingStyle>
            <SkillNameStyle>{skillName}</SkillNameStyle>
            <DotsRating range={skillRate}/>
            <SkillDescStyle>{skillDesc}</SkillDescStyle>
        </SkillRatingStyle>
    )
}