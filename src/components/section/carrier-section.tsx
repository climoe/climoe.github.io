import React, {JSX} from "react";
import "./section.module.css";


export default function CarrierSection({props}: {props: React.PropsWithChildren}): JSX.Element {
    return(
        <section className={"carrier"}>
            {props.children}
        </section>
    )
}

