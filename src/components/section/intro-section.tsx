import styled from "styled-components";

import { print } from "@/components/common/media-queries";
import { Header1, LargeParagraph } from "@/components/common/typography";

export const IntroSection = styled.section`

    padding: 10rem 0;
    margin: 0 auto;

    background-image: url("${'@/public/images/splash.svg'}");
    background-size: contain;
    background-position: right top;
    background-repeat: no-repeat;

    ${Header1} {
        color: var(--cv-color-darkest);
    }

    ${LargeParagraph} {
        padding: 0 3rem;
    }

    ${print`
        background: var(--cv-color-white);
    `}
`;
