'use client'

import React, { JSX, useContext } from 'react';
import styled from "styled-components";

import { LanguageContext } from "@/components/context/language-context";
import { ViteSection } from "@/components/section/vite-section";
import { Course } from "@/components/courses/course";
import { ReturnProps, CourseListProps } from '@/lib/content-loading/content-types';


const CourseListStyle = styled.ul`
        list-style: none;
        margin-bottom: .8rem;
        padding-inline-start: 0;
    `;

export default function CourseList(courses: ReturnProps<CourseListProps>): JSX.Element {
  const languageContext = useContext(LanguageContext)
  const { label, items } = languageContext.language === "en"? courses.frontmatter.language.en : courses.frontmatter.language.pl;

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

