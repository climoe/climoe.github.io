'use client'

import React, { JSX, use, useContext } from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";

import { LanguageContext } from "@/components/context/language-context";
import { ViteSection } from "@/components/section/vite-section";
import type { ReturnProps, EducationProps } from '@/lib/content-loading/content-types';

const LifetimeEventStyle = styled.ul`
  
    font-size: 1.6rem;
    width: 100%; 
    list-style: none;
    padding-left: 0;

    li {
        display: flex; 
        color: var(--cv-color-darkest);
    }

    time { 
      position: relative;
      font-weight: bold;
      writing-mode: vertical-rl;
      font-size: 1.4rem;
      text-orientation: sideways;       
      padding-right: 1rem;
      border-right: .2rem var(--cv-color-darkest) solid ;

      &::after {
        content: "";
        position: absolute; 
        z-index: 2;
        right: 0;
        top: 0;
        transform: translateX(60%);
        border-radius: 50%;
        background: var(--cv-color-darkest);
        border: .3rem var(--cv-color-darkest) solid;
        width: .5em;
        height: .5em;                
      }
    }

    span {
      padding: 0 1.5rem 1.5rem 1.5rem;
      position: relative;
  
      &::before {
        content: "";
        position: absolute;
        z-index: 1;
        left: 0;
        height: 100%;
      }
    }

    strong {
      display: block;
      font-weight: 500;
    }
`;

export default function Education({education} : { education: Promise<ReturnProps<EducationProps>>}): JSX.Element {

    const languageContext = useContext(LanguageContext)
    const edu = use(education)
    const {title, events} = languageContext.language === "en"? edu.frontmatter.language.en : edu.frontmatter.language.pl;
    return (
        <ViteSection id="education" title={title}>
          <LifetimeEventStyle>
              {events.map((ev, index) => 
                { return <motion.li whileTap={{ scale: 0.95 }} key={index}>
                    <time>{ev.time.from} - {ev.time.to}</time> 
                    <span><strong>{ev.title}</strong>{ev.description}</span>
                  </motion.li>  
                })
              }  
          </LifetimeEventStyle>
        </ViteSection>
    );
}