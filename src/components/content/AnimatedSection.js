import React, {useEffect} from "react";
import styled  from 'styled-components';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { media } from '../common/MediaQueries';


const AnimatedSectionStyle = styled.div`
  padding: 8rem 3rem;
  ${media.tablet`
    padding: 5rem 0;
  `}
  &:first-child {
    ${media.tablet`
      margin-bottom: 4rem;
    `};
  }
`;

const squareVariants = {
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 1 ,
        type: "tween",
        velocity: 5  
      } 
    },
    hidden: { 
      opacity: 0, 
    }
}

export function AnimatedSection({children}){
    
    const controls = useAnimation();
    const [ref, inView] = useInView();
    
    useEffect(()=>{
      if(inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
        <AnimatedSectionStyle>
            <motion.div 
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants}>
                  {children}
            </motion.div>
        </AnimatedSectionStyle>    
    )
}