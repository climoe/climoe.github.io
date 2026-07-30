import * as React from "react";
import  styled  from "styled-components";
import { UserCircleIcon } from "@phosphor-icons/react";

import Colors from "@/components/common/colors";
import { ScrollableProps } from '@/components/button/print/print';

const Button = styled.button<ScrollableProps>`
    justify-self: flex-end;
    position: relative;
    top: 0;
    right: 0;
    outline: none;
    border: none;
    z-index: 5;
    cursor: pointer;
    width: 9rem;
    padding: 0;
    height: 9rem;
    border-radius: 50%;
    background-color:${props => props.scrolled ? `${Colors.WHITE};` :`transparent;`};
`;

export const MenuToggle = ({ toggle, scrolled, opened }) => (
    <Button scrolled={scrolled} onClick={toggle}>
        <UserCircleIcon size={"8rem"} color={`${Colors.DARKEST}`} weight="duotone"/>
    </Button>
);
