import React from "react";
import styled from "styled-components";
import Colors from "../common/Colors";

const LifetimeEventStyle = styled.ul`
  
    font-size: 2rem;
    width: 100%; 
    list-style: none;
    padding-left: 0;

    li {
        display: flex; 
        color: ${Colors.DARKEST};
    }

    time { 
      position: relative;
      font-weight: bold;
      padding: 0 1.5rem;
      border-right: .2rem ${Colors.DARKEST} solid ;

      &::after {
        content: "";
        position: absolute; 
        z-index: 2;
        right: 0;
        top: 0;
        transform: translateX(50%);
        border-radius: 50%;
        background: ${Colors.DARKEST};
        border: .2rem ${Colors.DARKEST} solid;
        width: .8em;
        height: .8em;                
      }
    }

    span {
      padding: 0 1.5rem 1.5rem 1.5rem;
      position: relative;
  
      &::before {
        content: "";
        position: absolute;
        z-index: 1;
        left: 0;
        height: 100%;
        /* border-left: 0.2rem ${Colors.DARKEST} solid; */
      }
    }

    strong {
      display: block;
      font-weight: bolder;
    }
`;

export const LifetimeEvent = () => {
    return (
        <LifetimeEventStyle>
                <li>
                  <time>08.2013 - 09.2021</time> 
                  <span><strong>Bat Ball Lorem ipsum dolor sit amet </strong> Lorem ipsum dolor sit amet</span>
                </li>  
                <li>
                  <time>08.2013 - 09.2021</time> 
                  <span><strong>Bat Ball Lorem ipsum dolor sit amet </strong> Lorem ipsum dolor sit amet</span>
                </li>
                <li>
                  <time>08.2013 - 09.2021</time> 
                  <span><strong>Bat Ball Lorem ipsum dolor sit amet </strong> Lorem ipsum dolor sit amet</span>
                </li>                
                <li>
                  <time>08.2013 - 09.2021</time> 
                  <span><strong>Bat Ball Lorem ipsum dolor sit amet </strong> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</span>
                </li>
                <li>
                  <time>08.2013 - 09.2021</time> 
                  <span><strong>Bat Ball Lorem ipsum dolor sit amet </strong> Lorem ipsum dolor sit amet</span>
                </li>
                <li>
                  <time>08.2013 - 09.2021</time> 
                  <span><strong>Bat Ball Lorem ipsum dolor sit amet </strong> Lorem ipsum dolor sit amet</span>
                </li>
        </LifetimeEventStyle>
    );
}