import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const style = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
    //top: "10rem",
   //right: 0,    
    padding: "20.5rem",
    //zIndex: "1000"
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [0, 1, 2, 3, 4];

export const MenuList = () => (
    <motion.ul style={style} variants={variants}>
        {itemIds.map(i => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
);


