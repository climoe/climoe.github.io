import React from "react";
import styled from "styled-components";
import CssVar from '@thadathilsinan/cssvar';
import { CheckCircleIcon, HourglassIcon } from "@phosphor-icons/react";
import { print }  from "@/components/common/media-queries";

const CourseStyle = styled.article`
        display: flex;
        font-size: 1.2rem;
        font-weight: 500;
        align-items: flex-end;
        
        ${print`
            page-break-inside: avoid;
        `}
    `;

const CourseName = styled.p`
        font-size: 1.4rem;
        font-weight: 500;
        padding-left: .8rem;
    `;

const CourseDescription = styled.span`
        font-size: 1rem;
        padding-left: .8rem;
        margin-bottom: 1.5rem;
    `;

const CourseOwner = styled.span`
        font-size: 1rem;
        font-style: italic;
        font-weight: bold;
        padding-left: .8rem;
        margin-bottom: 1.5rem;
    `;

const CourseRealization = styled.i`
        border: 1px var(--cv-color-green-lighter);
        font-size: 2rem;
        margin-bottom: .8rem;
    `


export const Course = ({ name, owner, description, realized}) => {

    const cssVar = new CssVar();
    const purple = cssVar.get("--cv-color-purple")
    return (
        <CourseStyle>
            {realized === true ? 
                <CourseRealization><CheckCircleIcon size={"2rem"} color={purple}/></CourseRealization> :
                <CourseRealization><HourglassIcon size={"2rem"} color={purple}/></CourseRealization>
            }
            <CourseName>
                {name} - 
                <CourseDescription>{description}</CourseDescription>
                <CourseOwner>{owner}</CourseOwner>
            </CourseName>
        </CourseStyle>
    )
} 