import React from "react";
import styled from "styled-components";
import {Check, Checks} from "phosphor-react";

import Colors from "../common/Colors";

export const Course = ({ name, owner, realized}) => {

    const CourseStyle = styled.article`
        display: flex;
        font-size: 1.2rem;
        font-weight: 500;
        align-items: flex-end;
        
    `;

    const CourseName = styled.p`
        font-size: 1.4rem;
        font-weight: 700;
        padding-left: .8rem;
    `;

    const CourseOwner = styled.span`
        font-size: 1rem;
        font-style: italic;
        padding-left: .8rem;
        margin-bottom: 1.5rem;
    `;


    return (
        <CourseStyle>
            {realized === true ? 
                <Checks size={"4rem"} color={`${Colors.PINK}`} weight="duotone"/> : 
                <Check size={"4rem"} color={`${Colors.PINK}`} weight="duotone"/>
            }            
            <CourseName>{name}</CourseName>
            <CourseOwner>{owner}</CourseOwner>
        </CourseStyle>
    )

} 