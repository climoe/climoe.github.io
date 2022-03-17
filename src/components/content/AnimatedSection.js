import React, {useEffect} from "react";
import styled  from 'styled-components';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { media } from '../common/MediaQueries';


const AnimatedSectionStyle = styled.div`

  margin: 4rem 4rem 4rem 4rem;
  ${media.tablet`
    margin: 0;
  `}
  &:first-child {
    ${media.tablet`
      margin-bottom: 4rem;
    `};
  }

  .controls{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    ${media.tablet`
        flex-direction: column;
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
      },
      transfrom: "matrix(1,0,0,1,0,0)"
    },
    hidden: { 
      opacity: 0, 
      transform: "matrix(1,0,0,1,0,20)"
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
            <motion.div className="controls"
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants}>
                  {children}
            </motion.div>
        </AnimatedSectionStyle>    
    )
}