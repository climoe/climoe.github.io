import React from "react";
import styled from "styled-components";

import Colors from "../components/common/Colors";
import {Header1, LargeParagraph} from "../components/common/Typography"

import PageStructure from "../components/layout/Layout";

import Projects from "../static/images/projects.inline.svg"
import { Experience } from "../components/experience/Experience";

import splash2 from "../static/images/splash2.svg";
import { print } from "../components/common/MediaQueries"


const CareerPath = () => {


    const StyledHompage = styled.div`

        position: relative;
        margin: auto;
        max-width: 140rem;
        overflow: hidden;
        background-color: ${Colors.WHITE};
        z-index: 0;
        box-shadow: 0 0.0625rem 0.25rem 0 rgba(61, 66, 80, 0.18);

        background-attachment: fixed;
        background-color: rgb(217, 228, 245);
        background-image: linear-gradient(315deg, rgb(217, 228, 245) 0%, rgb(245, 227, 230) 74%);

        ${LargeParagraph} {
            margin-bottom: 2.8rem;
        }
        ${Header1} {
            margin: 0 0 2rem 0;
        }
    
    `;

    const ExperienceStyle = styled.section`

        background-image: url("${splash2}");
        background-size: contain;
        background-position: left center;
        background-repeat: no-repeat;

        ${print`
            background: white;
        `}
      
    `;    

    const careerStyle = {
        "left": "10%",
        "opacity": 0.5,
        "position": "absolute",
        "top": "2rem",
        "width": "75%",
        "minWidth": "500px",
        "zIndex": -1
    }

    return (
        <StyledHompage>
        <PageStructure>
            <div style={careerStyle}>
                <Projects/>
            </div>    
            <ExperienceStyle>
                <Experience/>
            </ExperienceStyle>
        </PageStructure>
        </StyledHompage>

    )
}
export default CareerPath;