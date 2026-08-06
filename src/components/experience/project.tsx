import React from "react";
import styled from "styled-components";
import { Technology } from "./technology";

import { print } from "@/components/common/media-queries";


const ProjectStyle = styled.section`
 
        padding-left: .5rem;
        padding-right: .5rem;
        margin-top: .5rem;

        ${print`
            page-break-inside: avoid;
        `}
    `;

const ProjectName = styled.h5`
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 0;
    `;

const ProjectPosition = styled.h5`
        font-size: 1.4rem;
        font-weight: 300;
        margin-bottom: 0;
        margin-top: .8rem;
    `;

const ProjectDetails = styled.article`
        font-size: 1.4rem;
        font-weight: 300;
        color: var(--cv-color-grey);
        
    `;

const ProjectRole = styled.article`
        font-size: 1.4rem;
        font-weight: 300;
        color: var(--cv-color-grey);
        
    `;

const ProjectTechnologies = styled.p`
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: .5rem;
        page-break-inside: avoid;

        ${print`
            page-break-inside: avoid;
        `}
    `;
export const Project = ({name, position, details, role, technologies}) => {

    return (
        <ProjectStyle>
            <ProjectName>{name}</ProjectName>
            <ProjectPosition>{position}</ProjectPosition>
            <ProjectDetails>{details}</ProjectDetails>
            <ProjectRole>{role}</ProjectRole>
            <ProjectTechnologies>
                {technologies.map((tech, index) => {
                    return (<Technology name={tech.name} key={index}/>)
                })}
            </ProjectTechnologies>
        </ProjectStyle>
    )
}