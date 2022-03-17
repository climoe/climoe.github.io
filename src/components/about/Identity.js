import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage  from "gatsby-image";
import styled from "styled-components";
import { Envelope, PhoneCall, HouseLine} from "phosphor-react";


import { FlexRowSection, FlexColumnSection, FlexColumnDiv, FlexRowDiv } from "../common/FlexBox";
import { Header2, Header3, Paragraph } from "../common/Typography";
import Colors from "../common/Colors";

import Pin from "../../static/images/location.inline.svg";

const Personal = () => {
    
    const StyledPersonal = styled(FlexColumnSection)`
        flex: 1 0 50%;
        align-items: center;
    `;
    
    const StyledName = styled(Header2)`
        align-self: center;
        font-weight: 900;
        
        text-align: center;

        span {
            display: inline-block;
            font-weight: 300;     
        }
    `;

    const StyledAvatar = styled.div`
        display: inline-block;
        align-self: center;
        position: relative;
    `;

    const AvatarBackground = styled.div`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 50%;
        background: linear-gradient(90deg, #FF6633 0%, #FF33CC 100%);
        z-index: 0;
        transform: translateX(8%);
    `;

    const StyledLocation = styled.div`
        display: inline-flex;
        width: auto;
        background-color: ${Colors.DARKEST};
        margin-top: 2.5rem;

    `;

    const StyledPinDiv = styled.span`
        border-color: ${Colors.WHITE};
        border-right: 6px;
        border: 0 solid ${Colors.WHITE};
        padding: .5rem .5rem .5rem 1.25rem; 
    `;

    const StyledPin = styled.span`

        display: inline-block;
        width: 2rem;
        height: 2rem;
    `;

    const StyledCity = styled.span`
        font-size: 2.25rem;
        color: ${Colors.WHITE};
        font-weight: 700;
        padding: .5rem 1.25rem .5rem .5rem;
    `;

    const imageStyle = {
        width:"15rem", 
        height:"15rem", 
        borderRadius: "50%",
        borderStyle: "solid"
    }    

    const avatarQuery = graphql`  
        query AvatarQuery {
            file(relativePath: {regex: "images//social.JPG/"}) {
                childImageSharp{
                    fixed{
                        src
                    }                 
                }
            }
        }`
      
    const data = useStaticQuery(avatarQuery)

    return (
        <StyledPersonal>
            <StyledName>Kamil Klimczak<span>Web Developer</span></StyledName>
            <StyledAvatar>
                <AvatarBackground/>
                <GatsbyImage style={imageStyle} fixed={data.file.childImageSharp.fixed} />
            </StyledAvatar>
            <StyledLocation>
                <StyledPinDiv>
                    <StyledPin>
                        <Pin/>
                    </StyledPin>
                </StyledPinDiv>
                <StyledCity>Wrocław, PL</StyledCity>
            </StyledLocation>
            {/* <Paragraph>1.Testowy tekst na tyle długi żeby mógł się złamać w linii</Paragraph> */}
            {/* <LargeParagraph>2.Testowy tekst na tyle długi żeby mógł się złamać w linii</LargeParagraph>
            <Header4>3.Testowy tekst na tyle długi żeby mógł się złamać w linii</Header4>
            <Header3>4.Testowy tekst na tyle długi żeby mógł się złamać w linii</Header3>
            <Header2>5.Testowy tekst na tyle długi żeby mógł się złamać w linii</Header2>
            <Header1>6.Testowy tekst na tyle długi żeby mógł się złamać w linii</Header1> */}
        </StyledPersonal>    
    );
}

const About = () => {
    const StyledAbout = styled(FlexColumnDiv)`
        flex: 1 0 50%;
        align-self: flex-start;
        
        align-content: flex-start;
        justify-content: flex-start;
        flex-direction: column;

        text-indent: 4rem;

        h3 {
            margin-top: 1rem;
            margin-left: 1rem;
            font-weight: 300;
        }

        h2 {
            font-weight: 900;
            margin-bottom: 1rem;
        }

    `;
    return (
        <StyledAbout>
            <Header2>About</Header2>
            <Header3>
                I'm a JVM Software Developer living in Wrocław. 
                I have 8 years of experience in creating web application.
                Had working with largest polish bank through all these years
                realizing a dozen of projects.
            </Header3>
        </StyledAbout>    
    )
}


const StyledParagraph = styled(Paragraph)`
    font-weight: 300;
    margin: 0;
`;

const Address = () => {  
    
    const StyledAddress = styled.span`
        
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        align-content: flex-start;

        h3 {
            margin-top: 1rem;
            margin-left: 1rem;
            font-weight: 300;
        }

        h2 {
            font-weight: 900;
            margin-bottom: 1rem;
        }
    `;
    
    const StyledIconSpan = styled.span`
        border-right: 1rem solid transparent;
    `;

    const StyledIcon = styled.span`

        display: inline-block;
        width: 2.4rem;
        height: 2.4rem;
    `;


    return(
        <StyledAddress>
            <Header2>Exact address</Header2>
            <StyledParagraph>
                <StyledIconSpan>
                <StyledIcon>
                    <HouseLine size={"2.4rem"} color="magenta"/>
                </StyledIcon>
            </StyledIconSpan>
            ul. Wilczycka 30/2, 51-361 Wilczyce</StyledParagraph>
        </StyledAddress>
    )
}

const Contact = () => {
    
    const StyledContact = styled.span`
        
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        align-content: flex-start;
        margin-top: 2rem;

        //text-indent: 4rem;

    h3 {
      margin-top: 1rem;
      margin-left: 1rem;
      font-weight: 300;
    }

    h2 {
      font-weight: 900;
      margin-bottom: 1rem;
    }
    `;

    const StyledIconSpan = styled.span`
        border-right: 1rem solid transparent;
    `;

    const StyledIcon = styled.span`

        display: inline-block;
        width: 2.4rem;
        height: 2.4rem;
    `;

    return (
        <StyledContact>
            <Header2>Contact details</Header2>
            <StyledParagraph>
                <StyledIconSpan>
                    <StyledIcon>
                        <Envelope size={"2.4rem"} color={"magenta"}/>
                    </StyledIcon>
                </StyledIconSpan>
                klimczak.kamill@gmail.com
            </StyledParagraph>
            <StyledParagraph>
            <StyledIconSpan>
                    <StyledIcon>
                        <PhoneCall size={"2.4rem"} color={"magenta"}/>
                    </StyledIcon>
                </StyledIconSpan>
                509-405-890</StyledParagraph>
        </StyledContact>
    )
}

const SocialTags = () => {
    
    const StyledSocialTags = styled.div`

        display: flex;
        flex-direction: column;

        align-items: center;

        h2 {
            font-weight: 900;
            margin-bottom: 1rem;
        }

        p { 
            margin-top: 1rem;
        }
    `;
    
    const StyledSpans = styled.span`
        display: inline-flex;
        padding: 1.5rem;
        border-radius: 1rem;
        
        font-weight: 700;
        font-size: 2rem;
        margin-left: 1rem;
        
        background: linear-gradient(90deg, #FF6633 0%, #FF33CC 100%);
        color: ${Colors.DARKEST};
    `;
    
    return (
        <StyledSocialTags>
            <Header2>Socials</Header2>
            <Paragraph>
                <StyledSpans>LINKEDIN</StyledSpans>
                <StyledSpans>TWITTER</StyledSpans>
                <StyledSpans>DEV.TO</StyledSpans>
            </Paragraph>
        </StyledSocialTags>
    )
}

const LifeSentence = () => {

    const ItalicParagraph = styled(Paragraph)`
        margin-top: .5rem;
        font-size: 2rem;
        font-style: italic;
        font-weight: 300;
        text-align: center;
    `;

    const StyledLifeSentence = styled.div`

        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            font-weight: 900;
            margin-bottom: 1rem;
        }
    `;
    
    return(
        <StyledLifeSentence>
            <Header2>Life Sentence</Header2>
            <ItalicParagraph>"Don't try to be better from others today, be better version of yourself from yesterday!"</ItalicParagraph>
        </StyledLifeSentence>
    )
}

const GappedFlexRowSection = styled(FlexRowSection)`
    gap: 2rem 20rem;
`;

export const Identity = () => {
    return (
        <FlexColumnSection>
            <FlexRowDiv>
                <Personal/>
                <About/>
            </FlexRowDiv>
            <GappedFlexRowSection>
                <Address/>
                <Contact/>
            </GappedFlexRowSection>
            <FlexRowDiv>
                <SocialTags/>
            </FlexRowDiv>
            <FlexColumnSection>
                <LifeSentence/>
            </FlexColumnSection>
        </FlexColumnSection>
    )
}
