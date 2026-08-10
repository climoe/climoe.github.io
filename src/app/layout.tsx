"use client";

import "./globals.css";
import React, { ComponentPropsWithRef, useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { LanguageContext } from "@/components/context/language-context";
import Hero from "@/components/header/hero";
import Footer from "@/components/footer/footer";
import Header from "@/components/common/header";

function LayoutWithRef(props: ComponentPropsWithRef<"div">) {
  return <div {...props}>{props.children}</div>;
}

export default function PageLayout({ children }): React.ReactNode {
  const languageContext = useContext(LanguageContext);

  const componentRef = useRef<HTMLDivElement>(null);
  const pageStyle = `
    @page {
      size: A4;
      margin: .5in 0 .5in !important;
    }

    @page:first{
      margin-top: 0;
    } 
`;

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    pageStyle: pageStyle,
    //copyStyles: true,
    documentTitle: "CV - Kamil Klimczak",
  });

  return (
    <html lang="en">
      <body>
        <LanguageContext value={languageContext}>
          <Header />
          <Hero />
          <LayoutWithRef ref={componentRef}>{children}</LayoutWithRef>
          <Footer handlePrint={handlePrint} />
        </LanguageContext>
      </body>
    </html>
  );
}
