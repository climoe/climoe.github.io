import React from "react";
import styled,  {css} from "styled-components";

import loadFrontmatter, { MDXFilesPath } from '@/content/content-loading';

import { SkillRating } from "@/components/skills/skill-rating";
import { ViteSection } from "@/components/section/vite-section";
import Colors from "@/components/common/colors";
import { mediaQueries} from "@/components/common/media-queries";
import { useLanguageContext } from "@/components/context/language-context";


const SkillsStyle = styled.div`

    page-break-inside:  auto;
    
    @media print {
        ${css`
            font-size: 1rem !important;
        `}
    }

`;

const SkillsGridStyle = styled.section`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    column-gap: 0;
    row-gap: 0.2rem;

    @media (max-width: '${mediaQueries.mlaptop}') {
        ${css`
            grid-template-columns: 20% 20% 20% 20% 20%;

        `}
    }

    @media (max-width: '${mediaQueries.tablet}') {
        ${css`
            grid-template-columns: 25% 25% 25% 25%;

        `}
    }

    @media print {
        ${css`
            grid-template-columns: 15% 15% 15% 15% 15% 15%;
            column-gap: .2rem;
            row-gap: .2rem;
        `}
    }
`;

const CategoryGridStyle = styled.section`
    display: grid;
    grid-template-columns: 100%;
    padding: 0;
    margin: 0;
`;

const CategoryStyle = styled.section`
    padding:0;
    margin: 0;
    page-break-inside: avoid;
`;

const SkillsCategory = styled.h4`
    font-size: 1rem;
    color: ${Colors.GREY};
    margin: 1.5rem 0 0;
    padding-left: 1rem;
    page-break-inside: avoid;


    @media print {
        ${css`
            font-size: 1.2rem;
            margin: 1rem 0 0;
            padding-left: 0.5rem;
        `}
    }
`;

const SkillsLegend = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    color: ${Colors.GREY};
    @media print {
        ${css`
            font-size: 1rem;
        `}
    }
`;

type SkillsProps = {
  id: string,
  language: {
  pl: {
    description: string,
    legend: string,
    skills: {
      category: string,
      items: {
        name: string,
        rate: number,
        description: string,
      }[]
    }[]
  },
  en: {
    description: string,
    legend: string,
    skills: {
      category: string,
      items: {
        name: string,
        rate: number,
        description: string,
      }[]
    }[]
  }
  }
}

const Skills = async () => {

    const languageContext = useLanguageContext()
    const metadata: SkillsProps = await loadFrontmatter(MDXFilesPath.Technology)
    const {description, legend, skills} = languageContext.language === "en"? metadata.language.en : metadata.language.pl;

    return (
        <ViteSection id="technology" title={description}>
            <SkillsStyle>
                <CategoryGridStyle>
                {skills.map((skill, index1) => {
                    return (
                        <CategoryStyle key={skill.category}>
                            <SkillsCategory key={index1}>{skill.category}</SkillsCategory>
                            <SkillsGridStyle key={skill.category}>
                                {skill.items.map((item, index2) => {
                                    return <SkillRating skillName={item.name} skillRate={item.rate} skillDesc={item.description} key={index2}/>;
                                })}
                            </SkillsGridStyle>
                        </CategoryStyle>                        
                )})}
                </CategoryGridStyle>
                <SkillsLegend>{legend}</SkillsLegend>
            </SkillsStyle>
        </ViteSection>
    )
}

export default Skills;