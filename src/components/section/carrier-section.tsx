import styled from "styled-components";

import { print } from "@/components/common/media-queries"

export const CareerSection = styled.section`

  background-image: url("${'@/public/images/splash2.svg'}");
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;

  margin: 3rem 2rem 1rem;


  ${print`
       background: white;
  `}

`;