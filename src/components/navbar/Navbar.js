import React, { useRef } from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Colors from "../common/Colors";
import { LanguageSwitch } from "../button/LanguageSwitch";
import useSticky from "./use-sticky";

const StyledNavbar = styled.nav`
    
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;

    height: 10vh;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;

    font-weight: 700;

    padding: 0;
    margin: 5rem 0;

    background-color: ${props => props.sticky === true ? Colors.WHITE : 'transparent'};
    border-bottom: ${props => props.sticky === true ? `1px solid ${Colors.LIGHT_GREY}` : 'transparent'};
     
    animation: moveDown 0.5s ease-in-out;

    & a {
        color: ${Colors.DARKEST};
        padding: .4rem;
        margin-right: .8rem;
        font-size: 2.4rem;
        
        border-style: none;
        text-decoration: none;
        cursor: pointer;
    }  
`;



const Navbar = () => {

    const elementRef = useRef(null)
    const isSticky = useSticky(elementRef)
    

    return (
        <StyledNavbar ref={elementRef} sticky={isSticky}>
                <li><AnchorLink to="/#about" title="About"/></li>
                <li><AnchorLink to="/#experience" title="Career"/></li>
                <li><AnchorLink to="/#education" title="Education"/></li>
                <li><AnchorLink to="/#technology" title="Technology"/></li>
                <li><AnchorLink to="/#courses" title="Courses"/></li>
                <LanguageSwitch sticky={isSticky}/>
        </StyledNavbar>
    )
}

export default Navbar;