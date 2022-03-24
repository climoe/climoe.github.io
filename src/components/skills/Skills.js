import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import { SkillRating } from "./SkillRating";
import { ViteSection } from "../section/ViteSection";
import Colors from "../common/Colors";
import { useLanguageContext } from "../context/LanguageContext";


export const Skills = () => {

    const SkillsStyle = styled.div`
    `;

    const SkillsGridStyle = styled.section`
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        column-gap: 0.5rem;
        row-gap: 1.5rem;
    `;

    const SkillsCategory = styled.h4`
        font-size: 1.6rem;
        color: ${Colors.GREY};
        margin: 1.5rem 0 0;
        padding-left: 1rem;
    `;

    const SkillsLegend = styled.p`
        font-size: 1.2rem;
        font-weight: 300;
        color: ${Colors.GREY};
    `;    

    const knownTechnologiesQuery = graphql`
        query KnownTechnologies{
            markdownRemark(frontmatter: {id: {eq: "known-technologies"}}) {
                frontmatter {
                    id
                    language{
                        pl{
                            description
                            legend 
                            skills{
                                category 
                                items{
                                    name
                                    rate
                                    description
                                }    
                            }
                        }	
                        en{
                            description
                            legend 
                            skills{
                                category
                                items{
                                    name
                                    rate
                                    description
                                }
                            }
                        }	
                    }
                }
            }
        }
    `;

    const data = useStaticQuery(knownTechnologiesQuery);
    const languageContext = useLanguageContext()
    console.log("Data from known technologies", {data})
    const {description, legend, skills} = languageContext.language === "en"? data.markdownRemark.frontmatter.language.en : data.markdownRemark.frontmatter.language.pl;
    console.log("Skills", {skills})

        
    return (
        <ViteSection title={description}>
            <SkillsStyle>
            {skills.map((skill) => {
                return (
                    <>
                    <SkillsCategory>{skill.category}</SkillsCategory>
                    <SkillsGridStyle>
                        {skill.items.map((item) => {
                            return <SkillRating skillName={item.name} skillRate={item.rate} skillDesc={item.description} />;
                        })}
                    </SkillsGridStyle></>                        
                )})}
                <SkillsLegend>{legend}</SkillsLegend>
            </SkillsStyle>
        </ViteSection>
    )
}