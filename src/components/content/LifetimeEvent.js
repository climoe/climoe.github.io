import React from "react";
import styled from "styled-components";
import Colors from "../common/Colors";

const LifetimeEventStyle = styled.ul`
  
    font-size: 2rem;

    .events {
        margin: 1rem; 
        width: 100%; 

        li {
            display: flex; 
            color: ${Colors.DARKEST};
        }

        time { 
            position: relative;
            padding: 0 1.5rem;    

            &::after {
                content: "";
                position: absolute; 
                z-index: 2;
                right: 0;
                top: 0;
                transform: translateX(50%);
                border-radius: 50%;
                background: ${Colors.PINK};
                border: .2rem ${Colors.PINK} solid;
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
                border-left: 0.25rem ${Colors.PINK} solid;
            }
        }

        strong {
            display: block;
            font-weight: bolder;
        }
    }
`;

export const LifetimeEvent = () => {
    return (
        <LifetimeEventStyle>
            <ul className="events">
                <li>
                  <time dateTime="10:03">08.2013 - 09.2021</time> 
                  <span><strong>Bat Ball Lorem ipsum dolor sit amet </strong> Lorem ipsum dolor sit amet</span>
                </li>  
                <li>
                  <time dateTime="10:03">08.2013 - 09.2021</time> 
                  <span><strong>Bat Ball Lorem ipsum dolor sit amet </strong> Lorem ipsum dolor sit amet</span>
                </li>
                <li>
                  <time dateTime="10:03">08.2013 - 09.2021</time> 
                  <span><strong>Bat Ball Lorem ipsum dolor sit amet </strong> Lorem ipsum dolor sit amet</span>
                </li>                
                <li>
                  <time dateTime="10:03">08.2013 - 09.2021</time> 
                  <span><strong>Bat Ball Lorem ipsum dolor sit amet </strong> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</span>
                </li>
                <li>
                  <time dateTime="10:03">08.2013 - 09.2021</time> 
                  <span><strong>Bat Ball Lorem ipsum dolor sit amet </strong> Lorem ipsum dolor sit amet</span>
                </li>
                <li>
                  <time dateTime="10:03">08.2013 - 09.2021</time> 
                  <span><strong>Bat Ball Lorem ipsum dolor sit amet </strong> Lorem ipsum dolor sit amet</span>
                </li>
            </ul>
        </LifetimeEventStyle>
    );
}