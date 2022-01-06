import styled from 'styled-components';
import Colors from '../common/Colors'
import { media } from '../common/MediaQueries'

const typographyColor = (props) => {
    return props.primary ? Colors.DARKEST : props.white && Colors.LIGHT
}

export const Sizes = {
	XXL: '56px',
	XL: '34px',
    L: '32px',
    ML: '24px',
	M: '21px',
	S: '18px',
	XS: '16px',
	XXS: '12px',
};

export const LineHeights = {
    XXXXL: '2.24',
    XXXL: '2.22',
    XXL: '1.81',
	XL: '1.62',
	L: '1.38',
	M: '1.5',
	S: 'normal',
	XS: '1.05',
    XXS: '0.9'
};

export const Header1 = styled.h1`
	font-size: ${Sizes.XXL};
    line-height: ${LineHeights.S};
    color: ${props => typographyColor(props)};
    font-weight: ${props => props.bold ? "bold" : props.thin ? "300" : "normal"};
    text-align: ${props => props.align ? props.align : 'inherit'};
    ${props => props.noMargin && "margin: 0;"}
    ${props => props.max45 ? "max-width: 575px; margin: 0 auto;" : props.max70 && "max-width: 950px; margin: 0 auto;"}
    ${media.phone`
        ${props => (props.max45 || props.max70) && "max-width: 80%;"}
        font-size: 42px;
    `}
`;

export const Header2 = styled.h2`
	font-size: ${Sizes.XL};
    line-height: ${LineHeights.L};
    color: ${props => typographyColor(props)};
    font-weight: ${props => props.bold ? "bold" : props.thin ? "300" : "normal"};
    text-align: ${props => props.align ? props.align : 'inherit'};
    ${props => props.noMargin && "margin: 0;"}
    ${props => props.max45 ? "max-width: 575px; margin: 0 auto;" : props.max70 && "max-width: 950px; margin: 0 auto;"}
    ${media.phone`${props => (props.max45 || props.max70) && "max-width: 80%;"}`}
`;

export const Header3 = styled.h3`
	font-size: ${Sizes.L};
    line-height: ${LineHeights.S};
    color: ${props => typographyColor(props)};
    font-weight: ${props => props.bold ? "bold" : props.thin ? "300" : "normal"};
    text-align: ${props => props.align ? props.align : 'inherit'};
    ${props => props.noMargin && "margin: 0;"}
    ${props => props.max45 ? "max-width: 575px; margin: 0 auto;" : props.max70 && "max-width: 950px; margin: 0 auto;"}
    ${media.phone`${props => (props.max45 || props.max70) && "max-width: 80%;"}`}
`;

export const Header4 = styled.h4`
	font-size: ${Sizes.M};
    line-height: ${LineHeights.XXXXL};
    color: ${props => typographyColor(props)};
    font-weight: ${props => props.bold ? "bold" : props.thin ? "300" : "normal"};
    text-align: ${props => props.align ? props.align : 'inherit'};
    ${props => props.noMargin && "margin: 0;"}
    ${props => props.max45 ? "max-width: 575px; margin: 0 auto;" : props.max70 && "max-width: 950px; margin: 0 auto;"}
    ${media.phone`${props => (props.max45 || props.max70) && "max-width: 80%;"}`}
`;

export const LargeParagraph = styled.p`
	font-size: ${Sizes.M};
    line-height: ${LineHeights.XL};
    color: ${props => typographyColor(props)};
    font-weight: ${props => props.bold ? "bold" : props.thin ? "300" : "normal"};
    text-align: ${props => props.align ? props.align : 'inherit'};
    ${props => props.noMargin && "margin: 0;"}
    ${props => props.max45 ? "max-width: 575px; margin: 0 auto;" : props.max70 && "max-width: 950px; margin: 0 auto;"}
    ${media.phone`${props => (props.max45 || props.max70) && "max-width: 80%;"}`}
`;

export const Paragraph = styled.p`
	font-size: ${Sizes.XS};
    line-height: ${LineHeights.M};
    color: ${props => typographyColor(props)};
    font-weight: ${props => props.bold ? "bold" : props.thin ? "300" : "normal"};
    text-align: ${props => props.align ? props.align : 'inherit'};
    ${props => props.noMargin && "margin: 0;"}
    ${props => props.max45 ? "max-width: 575px; margin: 0 auto;" : props.max70 && "max-width: 950px; margin: 0 auto;"}
    ${media.phone`${props => (props.max45 || props.max70) && "max-width: 80%;"}`}
`;