import * as React from "react";
import  styled  from "styled-components";
import { UserCircleIcon } from "@phosphor-icons/react";
import CssVar from '@thadathilsinan/cssvar';
import { ScrollableProps } from '@/components/button/print/print';
import { JSX } from 'react';

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
    background-color:${props => props.scrolled ? `var(--cv-color-white);` :`transparent;`};
`;

export default function MenuToggle({ toggle, scrolled } : {toggle: () => void, scrolled: boolean}): JSX.Element  {

  const darkest = new CssVar().get("--cv-color-darkest");

  return (
      <Button scrolled={scrolled} onClick={toggle}>
          <UserCircleIcon size={"8rem"} color={darkest} weight="duotone"/>
      </Button>
  )
};
