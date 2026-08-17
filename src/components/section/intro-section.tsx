import React, {JSX} from "react";
import "./section.module.css";

export default function IntroSection({props} : {props: React.PropsWithChildren}): JSX.Element {
	return (
		<section className={"intro"}>
			{props.children}
		</section>
	)
}