import styled from "styled-components";

import { print } from "../common/MediaQueries"

import splash2 from "../../static/images/splash2.svg"


export const CareerSection = styled.section`

  background-image: url("${splash2}");
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;

  ${print`
       background: white;
  `}

`;