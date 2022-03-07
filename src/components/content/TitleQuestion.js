import  React  from "react";
import  styled  from "styled-components";
import { media } from "../common/MediaQueries";
import  Colors  from "../common/Colors";

const TitleQuestionStyle = styled.div`
    
    display: flex;
    align-items: flex-end;
    justify-content: left;


    font-weight: 700;

    font-size: 4rem;
    width: 150rem;
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
            background-color: ${Colors.PINK};
            font-weight: 700;
        }
    }


    /* ${media.phone`
        font-size: 1.5rem;
        margin-left: 0.3rem;
        margin-right: 0.3rem;
    `}

    ${media.tablet`
        font-size: 2rem;
        margin-left: 0.4rem;
        margin-right: 0.4rem;
    `}

    ${media.laptop`
        font-size: 2.5rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    `} */
`;

export const TitleQuestion = () => {
    return (
        <TitleQuestionStyle>
            <span className="sentence">Want to get things done 
                <span className="quote">
                    <span className="message">
                        <div className="word">FAST?</div>
                        <div className="word">CLEAN?</div>
                        <div className="word">RIGHT?</div>
                    </span>    
                </span>
            </span>
        </TitleQuestionStyle>
    );
};