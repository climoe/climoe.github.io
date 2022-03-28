import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";

import { ViteSection } from "../section/ViteSection";
import { Project } from "./Project";
import Colors from "../common/Colors";
import { useLanguageContext } from "../context/LanguageContext";


export const Experience = () => {

    const ExperienceStyle = styled.div`

        font-size: 1.8rem;

        li {
            display: flex; 
            color: ${Colors.DARKEST};
        }

        time { 
            position: relative;
            writing-mode: vertical-rl;
            text-orientation: sideways;            
            font-weight: bold;
            padding: 0 1rem;
            border-right: .2rem ${Colors.DARKEST} solid ;

            &::after {
                content: "";
                position: absolute; 
                z-index: 2;
                right: 0;
                top: 0;
                transform: translateX(60%);
                border-radius: 50%;
                background: ${Colors.DARKEST};
                border: .3rem ${Colors.DARKEST} solid;
                width: .5em;
                height: .5em;                
            }
        }

        .position {
            padding: 0 1.5rem 1.5rem 1.5rem;
            position: relative;
    
            &::before {
                content: "";
                position: absolute;
                z-index: 1;
                left: 0;
                height: 100%;
                /* border-left: 0.2rem ${Colors.DARKEST} solid; */
            }
        }

        strong {
            display: inline-block;
            font-weight: 900;
        }
        
    `;

    const experienceQuery = graphql`
        query Experience{
            markdownRemark(frontmatter: {id: {eq: "experience"}}) {
                frontmatter {
                    id
                    description
                    language{
                        pl{
                            label
                            experience{
                                time{
                                    from
                                    to
                                }
                                position
                                projects{
                                    name
                                    description
                                    technology{
                                        name
                                    }
                                }
                            }
                        }
                        en{
                            label
                            experience{
                                time{
                                    from
                                    to
                                }
                                position
                                projects{
                                    name
                                    description
                                    technology{
                                        name
                                    }
                                }
                            }    
                        }
                    }
                }
            }
        }         
    `;

    const languageContext = useLanguageContext()
    const data = useStaticQuery(experienceQuery);

    const {label, experience} = languageContext.language  === "en" ?  data.markdownRemark.frontmatter.language.en : data.markdownRemark.frontmatter.language.pl

    return (
        <ViteSection title={label}>
            <ExperienceStyle>
              {experience.map((exp, index) => 
                { return <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} key={index}>
                    <time>{exp.time.from} - {exp.time.to}</time> 
                    <span className="position">
                        <strong>{exp.position}</strong>
                        { exp.projects.map((p) => 
                            {return <Project name={p.name} details={p.description} technologies={p.technology}/>}
                        )}
                    </span>
                  </motion.li>  
                })
              }  
            </ExperienceStyle>
        </ViteSection>
    )
}