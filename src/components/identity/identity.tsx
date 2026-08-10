"use client";

import React, { CSSProperties, JSX, use, useContext } from "react";
import Image from "next/image";
import styled from "styled-components";
import {
  AtIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  PhoneCallIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react";

import { LanguageContext } from "@/components/context/language-context";
import {
  FlexColumnDiv,
  FlexColumnSection,
  GridSection,
} from "@/components/common/flexbox";
import { Header2, Header3 } from "@/components/common/typography";
import { print } from "@/components/common/media-queries";

import Pin from "@/public/images/location.svg";
import social from "@/public/images/social.jpg";

import type {
  IdentityProps,
  ReturnProps,
} from "@/lib/content-loading/content-types";
import Colors from "@/components/common/colors";

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
  background: linear-gradient(
    90deg,
    var(--cv-color-pink) 0%,
    var(--cv-color-purple) 100%
  );
  z-index: -1;
  transform: translateX(10%);
`;

const StyledLocation = styled.div`
  display: inline-flex;
  width: auto;
  background-color: var(--cv-color-darkest);
  margin-top: 2.5rem;
`;

const StyledPinDiv = styled.span`
  border-color: var(--cv-color-white);
  border: 0 solid var(--cv-color-white);
  padding: 0.5rem 0.5rem 0.5rem 1.25rem;
`;

const StyledPin = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
`;

const StyledCity = styled.span`
  font-size: 2.25rem;
  color: var(--cv-color-white);
  font-weight: 500;
  padding: 0.5rem 1.25rem 0.5rem 0.5rem;
`;

const imageStyle: CSSProperties = {
  width: "15rem",
  height: "15rem",
  borderRadius: "50%",
  borderStyle: "solid",
  zIndex: 5,
};

const Personal = ({ personal, id }) => {
  return (
    <StyledPersonal id={id}>
      <StyledName>
        {personal.name}
        <span> | {personal.position}</span>
      </StyledName>
      <StyledAvatar>
        <AvatarBackground />
        <Image
          src={social}
          width={250}
          height={250}
          style={imageStyle}
          alt={"Avatar image"}
          loading={"eager"}
        />
      </StyledAvatar>
      <StyledLocation>
        <StyledPinDiv>
          <StyledPin>
            <Pin />
          </StyledPin>
        </StyledPinDiv>
        <StyledCity>
          {personal.city}, {personal.country}
        </StyledCity>
      </StyledLocation>
    </StyledPersonal>
  );
};

const StyledContact = styled(FlexColumnDiv)`
  align-self: start;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    font-weight: 900;
    align-self: center;
  }

  h3 {
    margin-top: 1rem;
    margin-left: 1rem;
    font-weight: 300;
  }
`;

const StyledIcon = styled.span`
  display: inline-flex;
`;
const StyledMedium = styled.p`
  align-self: center;
  display: inline-flex;
`;

const AccessibilityStyle = styled(FlexColumnDiv)`
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  text-align: center;
  font-weight: 500;
`;

function Contact({ contact, social, accounts }): JSX.Element {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };

  return (
    <StyledContact>
      <Header2>{contact.header}</Header2>
      <StyledMedium>
        <StyledIcon>
          <AtIcon size={"2.4rem"} color={Colors.PINK} weight="duotone" />
        </StyledIcon>
        {contact.mail}
      </StyledMedium>
      <StyledMedium>
        <StyledIcon>
          <PhoneCallIcon
            size={"2.4rem"}
            color={Colors.PURPLE}
            weight="duotone"
          />
        </StyledIcon>
        {contact.phone}
      </StyledMedium>
      <Header2>{social.header}</Header2>
      <AccessibilityStyle>
        <LinkedinLogoIcon
          size={"3rem"}
          color={Colors.PURPLE}
          weight="duotone"
          onClick={onClickUrl(accounts[0].url)}
        />
        <TwitterLogoIcon
          size={"3rem"}
          color={Colors.PURPLE}
          weight="duotone"
          onClick={onClickUrl(accounts[1].url)}
        />
        <GithubLogoIcon
          size={"3rem"}
          color={Colors.PURPLE}
          weight="duotone"
          onClick={onClickUrl(accounts[2].url)}
        />
      </AccessibilityStyle>
    </StyledContact>
  );
}

const StyledAbout = styled(FlexColumnDiv)`
  align-content: flex-start;
  justify-content: center;

  grid-column: 1 / span 2;
  grid-row: 2 / 3;

  h3 {
    margin-top: 1rem;
    margin-left: 1rem;
    text-indent: 10rem;
    font-weight: 300;
  }

  h2 {
    font-weight: 900;
    margin-bottom: 1rem;
  }
`;

const About = ({ about }) => {
  return (
    <StyledAbout>
      <Header2>{about.header}</Header2>
      <Header3>{about.content}</Header3>
    </StyledAbout>
  );
};

const IdentityStyle = styled.div`
  display: block;
  margin-top: 4rem;

  ${print`
           margin: 0;
           padding: 0; 
        `}
`;

export default function Identity({
  identity,
}: {
  identity: Promise<ReturnProps<IdentityProps>>;
}): JSX.Element {
  const languageContext = useContext(LanguageContext);
  const id = use(identity);
  const {
    personal: p,
    about: a,
    contact: c,
    social: s,
    accounts: ac,
  } = languageContext.language === "en"
    ? id.frontmatter.language.en
    : id.frontmatter.language.pl;
  return (
    <IdentityStyle>
      <GridSection>
        <Personal id="about" personal={p} />
        <Contact contact={c} social={s} accounts={ac} />
        <About about={a} />
      </GridSection>
    </IdentityStyle>
  );
}
