import React from 'react';
import { Technology } from './technology';

import "./project.module.css";

export const Project = ({ name, position, details, role, technologies }) => {
	return (
		<section className={"project"}>
			<h5 className={"project-name"}>{name}</h5>
			<h5 className={'project-position'}>{position}</h5>
			<article className={'project-details'}>{details}</article>
			<article className={'project-role'}>{role}</article>
			<p className={'project-technologies'}>
				{technologies.map((tech, index) => {
					return <Technology name={tech.name} key={index}/>;
				})}
			</p>
		</section>
	);
};
