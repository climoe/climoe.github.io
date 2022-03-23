import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

//import { MenuItem } from "./MenuItem";
import  Colors  from "../../common/Colors";
import { Identity } from "../../identity/Identity";

const StyledMenu = styled.div`
    margin: 10rem 5rem 0;
    color: ${Colors.DARKEST};
    overflow-y: scroll;

`;

const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",    
    listStyle: "none",
    paddingInlineStart: 0,
    overflow: "auto",
    zIndex: 5
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.5 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Menu = () => (
  <StyledMenu>
    <motion.ul style={style} variants={variants}>
      <Identity/>
    </motion.ul>
  </StyledMenu>
);


