import * as React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components';


const MenuEntry = styled.div`

    .icon-placeholder {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        //flex: 4rem 0;
        margin-right: 2rem;
    }
  
    .text-placeholder {
        border-radius: .5rem;
        width: 20rem;
        height: 2rem;
        //flex: 1;
    }
`;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const style = { border: `.2rem solid ${colors[i]}` };
  const liStyle = {  listStyle: "none", marginBottom: "2rem", display: "flex", alignItems: "center", cursor: "pointer"}
  return (
    <motion.li
      style={liStyle}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      >
        <MenuEntry>
          <div className="icon-placeholder" style={style} />
          <div className="text-placeholder" style={style} />
        </MenuEntry>
    </motion.li>
  );
};
