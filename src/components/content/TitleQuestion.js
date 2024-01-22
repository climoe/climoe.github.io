import  React  from "react";
import  styled  from "styled-components";

import  Colors  from "../common/Colors";
import { print } from "../common/MediaQueries";

const TitleQuestionStyle = styled.div`
    
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 2.4rem;

    ${print`
        display: none;
    `}

    h1 {
        position: relative;
        overflow: hidden;
        
        width: 70rem;
        font-weight: 100;
        color: ${Colors.DARKEST};
    }

    .message {
        display: block;
        padding-left: 0.5rem;
        
        overflow: hidden;
        
        position: absolute;
        top: 0rem;
        left: 42rem;
        
        font-weight: 900;
        color: ${Colors.DARKEST};
        background: linear-gradient(90deg, #FF6633 0%, #FF33CC 100%);
        
        animation: openclose 5s ease-in-out infinite;

        .word {
        }
    }
`;

export const TitleQuestion = () => {
    return (
        <TitleQuestionStyle>
            <h1>
                <span>Want to get things done</span>
                <div className="message">
                    <div className="word">FAST?</div>
                    <div className="word">CLEAN?</div>
                    <div className="word">RIGHT?</div>
                </div>    
            </h1>
        </TitleQuestionStyle>
    );
};