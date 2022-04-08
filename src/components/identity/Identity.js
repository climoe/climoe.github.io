import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage  from "gatsby-image";
import styled from "styled-components";
import { Envelope, PhoneCall, HouseLine, LinkedinLogo, MediumLogo, TwitterLogo} from "phosphor-react";

import { useLanguageContext } from "../context/LanguageContext";
import { FlexColumnSection, FlexColumnDiv, GridSection } from "../common/FlexBox";
import { Header2, Header3, Paragraph } from "../common/Typography";
import Colors from "../common/Colors";
import { print } from "../common/MediaQueries";

import Pin from "../../static/images/location.inline.svg";

export const Personal = ({personal, image}) => {
    
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
        font-weight: 500;
        padding: .5rem 1.25rem .5rem .5rem;
    `;

    const imageStyle = {
        width:"15rem", 
        height:"15rem", 
        borderRadius: "50%",
        borderStyle: "solid"
    }    

    return (
        <StyledPersonal>
            <StyledName>{personal.name}<span> |{personal.position}</span></StyledName>
            <StyledAvatar>
                <AvatarBackground/>
                <GatsbyImage style={imageStyle} fadeIn={true} loading={"eager"} fixed={image.childImageSharp.fixed} />
            </StyledAvatar>
            <StyledLocation>
                <StyledPinDiv>
                    <StyledPin>
                        <Pin/>
                    </StyledPin>
                </StyledPinDiv>
                <StyledCity>{personal.city}, {personal.country}</StyledCity>
            </StyledLocation>
        </StyledPersonal>    
    );
}

const About = ({about}) => {
    
    const StyledAbout = styled(FlexColumnDiv)`
    
        align-self: center;
        justify-self: center;
        
        flex-direction: column;
        align-content: flex-start;
        justify-content: center;

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
            <Header2>{about.header}</Header2>
            <Header3>{about.content}</Header3>
        </StyledAbout>    
    )
}


const StyledParagraph = styled(Paragraph)`
    
    display: inline-block;
    font-weight: 300;
    
    margin: 0;
`;

const Address = ({address}) => {  
    
    const StyledAddress = styled.span`
        
        display: inline-flex;
        flex-direction: column;
        justify-self: center;
        align-self: center;

        h2 {
            font-weight: 900;
            margin-bottom: 1rem;
            align-self: center;
        }
    `;
    

    const StyledIcon = styled.span`

        display: inline-block;
        border-right: 1rem solid transparent;
        width: 2.4rem;
        height: 2.4rem;
        padding-bottom: 0;
        margin-bottom: 0;
    `;

    return(
        <StyledAddress>
            <Header2>{address.header}</Header2>
            <StyledParagraph>
                <StyledIcon>
                    <HouseLine size={"2.4rem"} color="magenta" weight="duotone"/>
                </StyledIcon>
                {address.content}
            </StyledParagraph>
        </StyledAddress>
    )
}

const Contact = ({contact}) => {
    
    const StyledContact = styled.span`
        
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        align-content: flex-start;

    h3 {
      font-weight: 300;
    }

    h2 {
      font-weight: 900;
      margin-bottom: 1rem;
    }
    `;

    const StyledIcon = styled.span`

        display: inline-block;
        border-right: 1rem solid transparent;
        width: 2.4rem;
        height: 2.4rem;
        padding-bottom: 0;
        margin-bottom: 0;
    `;

    return (
        <StyledContact>
            <Header2>{contact.header}</Header2>
            <StyledParagraph>
                <StyledIcon>
                    <Envelope size={"2.4rem"} color={"#FF33CC"} weight="duotone"/>
                </StyledIcon>
                {contact.mail}
            </StyledParagraph>
            <StyledParagraph>
                <StyledIcon>
                    <PhoneCall size={"2.4rem"} color={"#FF33CC"} weight="duotone"/>
                </StyledIcon>
                {contact.phone}</StyledParagraph>
        </StyledContact>
    )
}

const Accesibility = ({socialAccounts, printing}) => {
    
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  
    const onClickUrl = (url) => {
      return () => openInNewTab(url)
    }  

    const AccesibilityStyle = styled.p`

        grid-column: 1 / span 2;
        grid-row:  3 / 4;

        display: ${props => props.printing === true ? "none;" :"flex;"};

        text-align: center;
        font-weight: 500;
        box-align: initial;

        ${print`
            overflow: hidden;
            height: 0;
        `}
    `;


    return (
        <AccesibilityStyle printing={printing}>
            <LinkedinLogo size={"5rem"} color={`${Colors.PINK}`} weight="duotone" onClick={onClickUrl(socialAccounts[0].url)}/>
            <TwitterLogo size={"5rem"} color={`${Colors.PINK}`} weight="duotone" onClick={onClickUrl(socialAccounts[1].url)}/>
            <MediumLogo size={"5rem"} color={`${Colors.PINK}`} weight="duotone" onClick={onClickUrl(socialAccounts[2].url)}/>
        </AccesibilityStyle>
    )

}

const LifeSentence = ({sentence, printing}) => {

    const ItalicParagraph = styled(Paragraph)`
        margin-top: .5rem;
        font-size: 1.6rem;
        font-style: italic;
        font-weight: 300;
        text-align: center;
    `;

    const StyledLifeSentence = styled.div`

        grid-column: 1 / span 2;
        grid-row:  4 / 5;

        display: ${props => props.printing === true ? "none;" :"flex;"};

        ${print`
            overflow: hidden;
            height: 0;
        `}

        flex-direction: column;
        align-items: center;

        h2 {
            font-weight: 900;
            margin-bottom: 1rem;
        }
    `;
    
    return(
        <StyledLifeSentence printing={printing}>
            <Header2>{sentence.header}</Header2>
            <ItalicParagraph>{sentence.content}</ItalicParagraph>
        </StyledLifeSentence>
    )
}

export const Identity = ({printing}) => {
    
    
    const IdentityStyle = styled.div`
        display: ${props => props.printing === true ? `none` : `block`};
        
        ${print`
           margin: 0; 
           display: ${props => props.printing  === true ? `block;` : `none;`}
        `} 
    `;

    const identityQuery = graphql`
        query AvatarAndIdentity {
            file(relativePath: {regex: "images//social.JPG/"}) {
                childImageSharp{
                    fixed{
                        src
                    }                 
                }
            }
            markdownRemark(frontmatter: {id: {eq: "personal"}}) {
                frontmatter {
                    id
                    language {
                        pl {
                            contact {
                                header
                                mail
                                phone
                            }
                            address {
                                header
                                content
                            }
                            about {
                                header
                                content
                            }
                            personal {
                                position
                                name
                                country
                                city
                            }
                            social{
                                accounts{
                                  url
                                }
                            }    
                            sentence {
                                header
                                content
                            }
                        }
                        en {
                            contact {
                                header
                                mail
                                phone
                            }
                            address {
                                header
                                content
                            }
                            about {
                                header
                                content
                            }
                            personal {
                                position
                                name
                                country
                                city
                            }
                            social{
                                accounts{
                                  url
                                }  
                            }                    
                            sentence {
                                header
                                content
                            }
                        }
                    }                      
                }              
            }   
        }
    `;

    const languageContext = useLanguageContext()
    const data  = useStaticQuery(identityQuery);
    const { contact, address, about, personal, social, sentence} = languageContext.language === "en"? data.markdownRemark.frontmatter.language.en : data.markdownRemark.frontmatter.language.pl;
    const  image  = data.file;
    return (
        <IdentityStyle printing = {printing}>
            <GridSection>
                    <Personal personal={personal} image={image}/>
                    <About about={about}/>
                    <Address address={address}/>
                    <Contact contact={contact}/>
                    <LifeSentence sentence={sentence} printing={printing}/>
                    <Accesibility socialAccounts={social.accounts} printing={printing}/>
            </GridSection>
        </IdentityStyle>
    )
}
