"use client";

import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import { FlexRowCenter } from "@/components/common/flexbox";
import { Input } from "@/components/ui/input";
import { PrinterIcon } from "@phosphor-icons/react";
import styled from "styled-components";
import Colors from "@/components/common/colors";
import "@/styles/stylesheet.css";

const Printable = styled.main`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: var(--cv-color-white);
`;

const ProcessingAgree = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  font-size: 1.5rem;
  font-style: italic;
  color: var(--cv-color-grey);
  text-align: center;
`;

export function CVLayout({ children }): React.ReactNode {
  const [companyName, setCompanyName] = useState("");

  const pageStyle = `
      @page {
        size: A4;
        margin: .5in 0 .5in !important;
      }

      @page:first{
        margin-top: 0;
      } 
`;
  const printRef = useRef<HTMLDivElement>(null);
  const useHandlePrint = () =>
    useReactToPrint({
      contentRef: printRef,
      pageStyle: pageStyle,
      documentTitle: "CV - Kamil Klimczak",
    });

  const handleChangeCompanyName = (event) => {
    setCompanyName(event.target.value);
  };

  return (
    <>
      <FlexRowCenter>
        <Input
          placeholder="Enter company name"
          value={companyName}
          onChange={handleChangeCompanyName}
        />
        <PrinterIcon
          size={"4rem"}
          color={Colors.DARK}
          weight="duotone"
          onClick={useHandlePrint()}
        />
      </FlexRowCenter>
      <Printable>
        {children}
        <ProcessingAgree>
          <span>
            "I consent to the processing by my personal data included in my CV
            for the purposes of the recruitment process and further recruitment
            processes"
          </span>
        </ProcessingAgree>
      </Printable>
    </>
  );
}
export default CVLayout;
