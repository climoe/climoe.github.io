import React from "react";
import loadFrontmatter, { MDXFilesPath } from '@/content/content-loading';
import styled from "styled-components";

import { useLanguageContext } from "../context/language-context";
import { ViteSection } from "../section/vite-section";
import { Course } from "./course";



const CourseListStyle = styled.ul`

        list-style: none;
        margin-bottom: .8rem;
        padding-inline-start: 0;

    `;

type CourseListProps = {
  id: string,
  language: {
    pl: {
      label: string
      items: {
        name: string
        description: string
        owner: string
        realized: string
      }[]
    },
      en: {
        label: string
        items: {
          name: string
          description: string
          owner: string
          realized: string
        }[]
      }
    }
  }


export const CourseList = async () => {
    const languageContext = useLanguageContext()
    const metadata: CourseListProps = await loadFrontmatter(MDXFilesPath.Courses);
    const {label, items} = languageContext.language === "en"? metadata.language.en : metadata.language.pl;


    return (
        <ViteSection id="courses" title= {label}>
            <CourseListStyle>                
                {items.map((item, index) => {
                    return <Course name={item.name} owner={item.owner} description={item.description} realized={item.realized} key={index}/>
                })}
            </CourseListStyle>
        </ViteSection>
        
    )
}