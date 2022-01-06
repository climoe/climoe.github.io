import styled from 'styled-components';
import Colors from '../common/Colors';
import { lighten, darken } from 'polished';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  background: ${props => props.theme.bg};
  color: ${props =>props.theme === 'white' ? `${Colors.DARKEST};` : `${Colors.WHITE};`};
  line-height: 1.05;
  font-size: 16px;
  font-weight: bold;
  padding: ${props => (props.large ? '15px 34px;' : '12px 30px;')};
  border: 1px solid ${props =>
    props.theme === 'white' ? `${Colors.DARKEST};` : `${Colors.WHITE};`};
  border-radius: 100px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  ${props => props.book && 'margin-left: 15px;'}
  &:hover {
    color: ${props =>
      props.theme === 'white'
        ? `${lighten(0.3, Colors.DARKEST)};`
        : `${darken(0.1, Colors.WHITE)};`};
    text-decoration: none;
    background: transparent;
    border: 1px solid ${props =>
      props.theme === 'white'
        ? `${lighten(0.3, Colors.DARKEST)};`
        : `${darken(0.1, Colors.WHITE)};`};
  }
`;

export const HireMe = styled.div`
  line-height: 1.05;
  font-size: ${props => (props.large ? '24px' : '16px')};
  padding: ${props => (props.large ? '12px 50px 12px' : '12px 30px 12px')};
  border-radius: 100px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  background: ${Colors.LIGHT};
  color: #3c3b3b;
  font-weight: bold;
  border: 1px solid ${Colors.LIGHT};
  transition-duration: 0.3s;
  &:hover {
    color: #3c3b3b;
    background: linear-gradient(90deg, #FF6633 0%, #FF33CC 100%);
    border: 1px solid ${darken(0.2, Colors.LIGHT)};
  }
`;

export const LinkButton = styled(Button)`
  font-size: 0.9;
  border: none;
  text-decoration: underline;
  &:hover {
    border: none;
  }
`;
