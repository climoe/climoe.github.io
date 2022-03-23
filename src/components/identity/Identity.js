import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage  from "gatsby-image";
import styled from "styled-components";
import { Envelope, PhoneCall, HouseLine} from "phosphor-react";


import { FlexColumnSection, FlexColumnDiv, FlexRowDiv, FlexRow } from "../common/FlexBox";
import { Header2, Header3, Paragraph } from "../common/Typography";
import Colors from "../common/Colors";
import { media } from "../common/MediaQueries";

import Pin from "../../static/images/location.inline.svg";

const Personal = ({personal, image}) => {
    
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

    return (
        <StyledPersonal>
            <StyledName>{personal.name}<span> |{personal.position}</span></StyledName>
            <StyledAvatar>
                <AvatarBackground/>
                <GatsbyImage style={imageStyle} fixed={image.childImageSharp.fixed} />
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
                    <HouseLine size={"2.4rem"} color="magenta"/>
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
      margin-top: 1rem;
      margin-left: 1rem;
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
                    <Envelope size={"2.4rem"} color={"#FF33CC"}/>
                </StyledIcon>
                {contact.mail}
            </StyledParagraph>
            <StyledParagraph>
                <StyledIcon>
                    <PhoneCall size={"2.4rem"} color={"#FF33CC"}/>
                </StyledIcon>
                {contact.phone}</StyledParagraph>
        </StyledContact>
    )
}

const SocialTags = ({social}) => {
    
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
            <Header2>{social.header}</Header2>
            <Paragraph>
                {social.accounts.map((account) => (
                    <StyledSpans><a href={account.url}>{account.label}</a></StyledSpans>   
                ))}
            </Paragraph>
        </StyledSocialTags>
    )
}

const LifeSentence = ({sentence}) => {

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
            <Header2>{sentence.header}</Header2>
            <ItalicParagraph>{sentence.content}</ItalicParagraph>
        </StyledLifeSentence>
    )
}

const GappedFlexRowSection = styled(FlexRow)`
    gap: 2rem 20rem;
    margin: 1rem 4rem;

    ${media.tablet`
        gap: 2rem 10rem;
    `}

    ${media.phone`
        flex-direction: column;
        margin: 4rem 4rem;
    `}
`;

export const Identity = () => {
    
    const identityQuery = graphql`
    fragment identityFieldsEn on MarkdownRemarkFrontmatterLanguageEn {
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
        social {
          header
          accounts {
            label
            url
          }
        }
        sentence {
          header
          content
        }
      }
      fragment identityFieldsPl on MarkdownRemarkFrontmatterLanguagePl {
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
        social {
          header
          accounts {
              label
            url
          }
        }
        sentence {
            header
            content
        }
      }
        query AvatarAndIdentity($isEn: Boolean! = false) {
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
                    pl @skip(if: $isEn) {
                        ...identityFieldsPl
                    }
                    en @include(if: $isEn) {
                        ...identityFieldsEn		
                       }
                  }
                }
              }
          }  
        `;

    const data  = useStaticQuery(identityQuery);
    const { contact, address, about, personal, social, sentence} = data.markdownRemark.frontmatter.language.pl;
    const  image  = data.file;
    return (
        <FlexColumnSection>
            <FlexRowDiv>
                <Personal personal={personal} image={image}/>
                <About about={about}/>
            </FlexRowDiv>
            <GappedFlexRowSection>
                <Address address={address}/>
                <Contact contact={contact}/>
            </GappedFlexRowSection>
            <FlexRowDiv>
                <SocialTags social={social}/>
            </FlexRowDiv>
            <FlexColumnSection>
                <LifeSentence sentence={sentence}/>
            </FlexColumnSection>
        </FlexColumnSection>
    )
}
