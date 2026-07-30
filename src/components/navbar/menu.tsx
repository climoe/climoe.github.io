import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import  Colors  from "@/components/common/colors";
import { print } from "@/components/common/media-queries";
import  Identity  from "@/components/identity/identity";

const StyledMenu = styled.div`
    margin: 10rem 5rem 0;
    ${print`
      margin: 0;
    `}

    margin: 10rem 5rem 0;
    color: ${Colors.DARKEST};

`;

const style = {

    paddingInlineStart: 0,
  
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
      {/*<Identity/>*/}
    </motion.ul>
  </StyledMenu>
);


