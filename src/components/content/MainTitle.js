import  React  from "react";
import  styled  from "styled-components";
import  Colors  from "../common/Colors";

const StyledMainTitle = styled.p`
    
    font-size: 5rem;
    overflow: hidden;
    color: ${Colors.DARKEST};
    font-weight: 900;
    flex-grow: 1;

    span  {
        /* display: block; */
        font-size: 4rem;
        font-weight: 100;
        background-color: ${Colors.PINK};
    }
`;            
    
export const MainTitle = () => {
    return (
        <StyledMainTitle>
            Hi, there! My name is Kamil. <span>I'm Software Engineer living in  Wrocław.</span>
        </StyledMainTitle>
    );
};