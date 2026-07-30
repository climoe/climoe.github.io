import styled from "styled-components";

import { print } from "@/components/common/media-queries"

import splash2 from "@/public/images/splash2.svg"


export const CareerSection = styled.section`

  background-image: url("${splash2}");
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;

  margin: 3rem 2rem 1rem;


  ${print`
       background: white;
  `}

`;