import * as React from "react";
import { useRef } from "react";
import { motion, useCycle, Variants } from 'framer-motion';
import styled, { css } from "styled-components";

import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./manu-toggle";
import { Menu } from "./menu";
import { mediaQueries } from "../common/media-queries";


const StyledOptionDiv = styled.div`

    .options {
      position: absolute;
      z-index: 3;
      top: -1vh;
      right: -1vw;
      bottom: 0;
      width: 100vw;
      height: 101vh;
      background: rgba(255,255,255,0.5);
      backdrop-filter: saturate(180%) blur(20px);
      --moz-backdrop-filter: saturate(180%) blur(20px);
      @media (min-width: '${mediaQueries.desktop}') {
        ${css`
            margin-top: 2rem;
            flex: 1 1 100%;
        `}
    }
    }
`;

const navStyle = {
    display: "flex",
    justifySelf: "end"
}


const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${(height * 2 + 400)/10}rem at 164rem 4rem)`,
    transition: {
      type: "spring",
      stiffness: 20,
      delay: 0.1,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(4rem at 164rem 4rem)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Burger = ({scrolled}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav style={navStyle}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}>
        
        <StyledOptionDiv>
        
          <motion.div className="options" variants={sidebar}>
            <Menu/>
          </motion.div>
        
        </StyledOptionDiv>
        
        <MenuToggle opened={isOpen} scrolled={scrolled} toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
