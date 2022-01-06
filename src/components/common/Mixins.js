import { css } from 'styled-components';
import { LargeParagraph } from '../common/Typography';

export const center = css`
  display: block;
  margin: 0 auto;
`;

export const textCenter = css`
  text-align: center;
`;

export const bold = css`
  font-weight: bold;
`;

export const contentMax = css`
  max-width: 100%;
  margin: 0 2rem;
  padding: 0 3rem;
`;

export const wideContentMixin = css`
  max-width: 125rem;
  margin: 0 auto;
`;

export const fullWidth = css`
  width: 100%;
`;

export const aboveFoldMixin = css`
  padding: 11rem 0 18rem 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top -7rem,;
  text-align: center;
  ${LargeParagraph} {
    padding: 0 3rem;
  }
`;

export const block = css`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  & > div {
    flex: 1;
    padding: 0 2.5rem;
  }
`;

export const wrapper = css`
  position: relative;
  margin: auto;
  max-width: 140rem;
  overflow: hidden;
  background-color: #fff;
  z-index: 0;
  box-shadow: 0 0.0625rem 0.25rem 0 rgba(61, 66, 80, 0.18);
`;
