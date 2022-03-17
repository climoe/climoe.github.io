import * as React from "react";
import { motion } from "framer-motion";
import  styled  from "styled-components";
import Colors from "../../common/Colors";

const Button = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    outline: none;
    border: none;
    z-index: 5;
    cursor: pointer;
    width: 8rem;
    padding: 0;
    height: 8rem;
    border-radius: 50%;
    background-color:${props => props.scroll ? `${Colors.WHITE};` :`transparent;`};
`;
 

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="4"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, scrolled, opened }) => (
    <Button opening={opened} scroll={scrolled} onClick={toggle}>
        <svg width="8rem" height="8rem" viewBox="0 0 80 80">
            <Path
                variants={{
                closed: { d: "M 2 10 L 78 10" },
                open: { d: "M 3 70 L 70 3" }
                }}
            />
            <Path
                d="M 2 40 L 78 40"
                variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                closed: { d: "M 2 70 L 78 70" },
                open: { d: "M 3 3 L 70 70" }
                }}
            />
        </svg>
    </Button>
);
