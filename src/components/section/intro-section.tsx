import styled from "styled-components";

import Colors from "@/components/common/colors";
import { print } from "@/components/common/media-queries";
import { Header1, LargeParagraph } from "@/components/common/typography";

import splash from "@/public/images/splash.svg"

export const IntroSection = styled.section`

    //height: 80vh;
    padding: 10rem 0;
    margin: 0 auto;

    background-image: url("${splash}");
    background-size: contain;
    background-position: right top;
    background-repeat: no-repeat;

    ${Header1} {
        color: ${Colors.DARKEST};
    }

    ${LargeParagraph} {
        padding: 0 3rem;
    }

    ${print`
        background: white;
    `}
`;
