import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { MenuList } from "./MenuList";


const navStyle = {
    position: "relative",
    top: "-1rem",
    right: "-1rem",
    bottom: 0,
}


const divStyle = { 
    position: "absolute",
    top: "-1rem",
    right: "-4rem",
    bottom: 0,
    width: "140rem",
    height: "140rem",
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "saturate(180%) blur(10px)"
}



const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${(height * 2 + 200)/10}rem at 164rem 4rem)`,
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
        
        <motion.div style={divStyle} variants={sidebar}>
          <MenuList />
        </motion.div>
        <MenuToggle opened={isOpen} scrolled={scrolled} toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
