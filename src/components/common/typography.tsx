import styled from "styled-components";

export const Sizes = {
  XL: "4.8rem",
  L: "3.6rem",
  M: "2.4rem",
  S: "1.6rem",
};
export const Paragraph = styled.p`
  font-size: ${Sizes.S};
  color: var(--cv-color-darkest);
  font-weight: 500;
  text-align: left;
`;

export const LargeParagraph = styled.p`
  font-size: ${Sizes.S};
  color: var(--cv-color-darkest);
  font-weight: 500;
  text-align: left;
`;

export const Header4 = styled.h4`
  font-size: ${Sizes.S};
  color: var(--cv-color-darkest);
  font-weight: 500;
  text-align: left;
`;

export const Header3 = styled.h3`
  font-size: ${Sizes.S};
  color: var(--cv-color-darkest);
  font-weight: 500;
  text-align: left;
`;

export const Header2 = styled.h2`
  font-size: ${Sizes.M};
  color: var(--cv-color-darkest);
  font-weight: 500;
  text-align: left;
`;

export const Header1 = styled.h1`
  font-size: ${Sizes.XL};
  color: var(--cv-color-darkest);
  font-weight: 500;
  text-align: left;
`;
