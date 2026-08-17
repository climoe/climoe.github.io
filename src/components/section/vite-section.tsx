import React from 'react';
import "./section.module.css"


interface ViteSectionProps {
	title: string;
	id?: string;
}

export const ViteSection = (
	props: React.PropsWithChildren<ViteSectionProps>
) => {
	return (
		<section className={"vite"} id={props.id}>
			<h1 className={"vite-title"}>{props.title}</h1>
			{props.children}
		</section>
	);
};
