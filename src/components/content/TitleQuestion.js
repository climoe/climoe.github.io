import  React  from "react";
import  styled  from "styled-components";

import  Colors  from "../common/Colors";

const TitleQuestionStyle = styled.div`
    
    display: flex;
    align-items: flex-start;
    justify-content: left;

    font-weight: 500;

    font-size: 3.5rem;
    position: relative;
    overflow: hidden;

    margin:  2.5rem 1rem;
    color: ${Colors.DARKEST};

    border-bottom: 2rem;


    & .sentence {
        color: ${Colors.DARKEST};
        display: inline-block;
        
    }

    & .quote {

        height: 5rem;
        width: 18rem;
        padding-left: 2rem;
        
        display: inline;
        position: relative;
        overflow: hidden;
    }
    
    & .message {
        
        display: inline-block;
        position: absolute;
        overflow: hidden;
        z-index: 5;

        
        top: 0;
        
        animation: openclose 5s ease-in-out infinite;
        
        .word {    
            overflow: hidden;
            background: linear-gradient(90deg, #FF6633 0%, #FF33CC 100%);
            font-weight: 700;
        }
    }
`;

export const TitleQuestion = () => {
    return (
        <TitleQuestionStyle>
            <span className="sentence">Want to get things done 
                <span className="quote">
                    <span className="message">
                        <div className="word">FAST?</div>
                        <div className="word">CLEAN?</div>
                        <div className="word">RIGHT</div>
                    </span>    
                </span>
            </span>
        </TitleQuestionStyle>
    );
};