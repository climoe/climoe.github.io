'use client'

import React, { useRef } from "react";
import styled from "styled-components";
import Link  from "next/link";

import Colors from "@/components/common/colors";
import { LanguageSwitch } from "@/components/button/switch/language-switch";
import useSticky from "./use-sticky";

export interface StickyProps {
  sticky: boolean;
}

const StyledNavbar = styled.nav<StickyProps>`
    
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;


    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;

    font-weight: 500;

    padding: 3rem;
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
                <li><Link href="/#about" title="About"/></li>
                <li><Link href="/#experience" title="Career"/></li>
                <li><Link href="/#education" title="Eductaion"/></li>
                <li><Link href="/#technology" title="Technology"/></li>
                <li><Link href="/#courses" title="Courses"/></li>
                <LanguageSwitch sticky={isSticky}/>
        </StyledNavbar>
    )
}

export default Navbar;