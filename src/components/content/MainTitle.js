import  React  from "react";
import  styled  from "styled-components";

import  Colors  from "../common/Colors";
import { print } from "../common/MediaQueries"

const StyledMainTitle = styled.p`
    
    font-size: 5rem;
    overflow: hidden;
    color: ${Colors.DARKEST};
    font-weight: 700;
    flex: 1 1 50%;

    span  {
        font-size: 5rem;
        font-weight: 500;
        background: linear-gradient(90deg, #FF6633 0%, #FF33CC 100%);
    }

    ${print`
        display: none;
    `} 
`;            
    
export const MainTitle = () => {
    return (
        <StyledMainTitle>
            Hi, there! My name is Kamil. <span>I'm Software Engineer living in  Wrocław.</span>
        </StyledMainTitle>
    );
};