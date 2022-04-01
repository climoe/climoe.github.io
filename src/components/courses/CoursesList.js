import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import { useLanguageContext } from "../context/LanguageContext";
import { ViteSection } from "../section/ViteSection";
import { Course } from "./Course";

export const CourseList = () => {

    const CourseListStyle = styled.ul`

        list-style: none;
        margin-bottom: .8rem;
        padding-inline-start: 0;

    `;   

    const coursesList = graphql`
        query Courses{
            markdownRemark(frontmatter: {id: {eq: "courses"}}) {
                frontmatter {
                    id
                    language{
                        pl{
                            label
                            items{
                                name
                                owner
                                realized
                            }
                        }
                        en{
                            label
                            items{
                                name
                                owner
                                realized
                            }
                        }
                    }
                }
            }
        } 
    `;
    const data = useStaticQuery(coursesList)   
    const languageContext = useLanguageContext()
    const {label, items} = languageContext.language === "en"? data.markdownRemark.frontmatter.language.en : data.markdownRemark.frontmatter.language.pl;
    console.log("label", {label})
    console.log("Items", {items})


    return (
        <ViteSection title= {label}>
            <CourseListStyle>                
                {items.map((item) => {
                    return <Course name={item.name} owner={item.owner} realized={item.realized}/>
                })}
            </CourseListStyle>
        </ViteSection>
        
    )
}