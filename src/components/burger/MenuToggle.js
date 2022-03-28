import * as React from "react";
import  styled  from "styled-components";
import { UserCircle } from "phosphor-react";

import Colors from "../common/Colors";

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

export const MenuToggle = ({ toggle, scrolled, opened }) => (
    <Button opening={opened} scroll={scrolled} onClick={toggle}>
        <UserCircle size={"8rem"} color={`${Colors.DARKEST}`} weight="duotone"/>
    </Button>
);
