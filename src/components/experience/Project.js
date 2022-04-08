import React from "react";
import styled from "styled-components";
import { Technology } from "./Technology";

import Colors from "../common/Colors";
import { print } from "../common/MediaQueries";

export const Project = ({name, details, technologies}) => {

    const ProjectStyle = styled.section`
        padding: 1rem .5rem;

        ${print`
        
        `}


    `;
    
    const ProjectName = styled.h5`
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 0;
        margin-top: 1rem;

    `;

    const ProjectDetails = styled.article`
        font-size: 1.4rem;
        font-weight: 300;
        color: ${Colors.GREY};
    `;
    
    const ProjectTechnologies = styled.p`
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 0;
    `;

    return (
        <ProjectStyle>
            <ProjectName>{name}</ProjectName>
            <ProjectDetails>{details}</ProjectDetails>
            <ProjectTechnologies>
                {technologies.map((tech, index) => {
                    return (<Technology name={tech.name} key={index}/>)
                })}
            </ProjectTechnologies>
        </ProjectStyle>
    )

}