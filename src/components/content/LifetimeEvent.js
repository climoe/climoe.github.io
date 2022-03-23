import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Colors from "../common/Colors";

const LifetimeEventStyle = styled.ul`
  
    font-size: 1.6rem;
    width: 100%; 
    list-style: none;
    padding-left: 0;

    li {
        display: flex; 
        color: ${Colors.DARKEST};
    }

    time { 
      position: relative;
      font-weight: bold;
      min-width: 20rem;
      padding: 0 .3rem;
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

    span {
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
      display: block;
      font-weight: 900;
    }
`;

export const LifetimeEvent = () => {
    const lifeTimeEventsQuery = graphql`
      query LifeTimeEvents{
        markdownRemark(frontmatter: {id: {eq: "lifetime"}}) {
          frontmatter {
            id
            language {
              pl  {
                events {
                  time{
                    from 
                    to
                  }
                  title
                  description
                }	
              }
            }
          }
        }
      }  
    `;
  
    const data  = useStaticQuery(lifeTimeEventsQuery)
    console.log("Data from lifetime", {data})
    const events = data.markdownRemark.frontmatter.language.pl.events  
    console.log("Events", {events})
    return (
        <LifetimeEventStyle>
              {events.map((ev, index) => 
                { return <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} key={index}>
                    <time>{ev.time.from} - {ev.time.to}</time> 
                    <span><strong>{ev.title}</strong>{ev.description}</span>
                  </motion.li>  
                })
              }  
       </LifetimeEventStyle>
    );
}