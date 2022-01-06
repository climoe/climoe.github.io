import  React  from "react";
import  styled  from "styled-components";
import { media } from "../common/MediaQueries";
import  Colors  from "../common/Colors";

const TitleQuestionStyle = styled.div`
    
    display: flex;
    align-items: flex-end;
    justify-content: center;

    font-size: 5rem;
    font-weight: 800;

    padding: 2rem 2rem 0.5rem;
    margin:  10rem 15rem;
    color: ${Colors.DARKEST};

    border-bottom: 0;
    box-shadow: inset -.5rem -2.5rem ${Colors.PINK};
    border-radius: 0.3rem;

    ${media.phone`
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
    `}

    .static-part {
        color: ${Colors.DARKEST};
        font-weight: 800;
    }
    .dynamic-part {
        margin: 0 0 0 .5rem;
        padding: 0;
        height: 6rem;
        line-height: 6rem;
        overflow: hidden;
        

        li {
            list-style: none;
            color: ${Colors.DARKEST};
            font-size: 6rem;
            font-weight: 800;
            position: relative;
            top: 0;
            animation: slide 3s steps(3) infinite;

            span {
                position: relative;
                line-height: 6rem;

                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    background: ${Colors.WHITE};
                    border-left: .2rem solid ${Colors.PINK};
                    animation: typing 1s steps(6) infinite;
                }  
            }
        }
    }
`;

export const TitleQuestion = () => {
    return (
        <TitleQuestionStyle>
            <div className="static-part">
                WANT TO GET THINGS DONE 
            </div>
            <ul className="dynamic-part">
                <li><span>RIGHT?</span></li>
                <li><span>CLEAN?</span></li>
                <li><span>FAST? </span></li>
            </ul>
        </TitleQuestionStyle>
    );
};