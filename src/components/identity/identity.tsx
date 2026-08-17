'use client';

import React, { CSSProperties, JSX, use, useContext } from 'react';
import Image from 'next/image';

import { LanguageContext } from '@/components/context/language-context';
import type { IdentityProps, ReturnProps } from '@/lib/content-loading/content-types';

import { AtIcon, GithubLogoIcon, LinkedinLogoIcon, PhoneCallIcon, TwitterLogoIcon } from '@phosphor-icons/react';
import Pin from '@/public/images/location.svg';
import social from '@/public/images/social.jpg';
import Colors from '@/components/shared/colors';

import '@/components/identity/identity.module.css';

const imageStyle: CSSProperties = {
	width: '15rem',
	height: '15rem',
	borderRadius: '50%',
	borderStyle: 'solid',
	zIndex: 5
};

const Personal = ({ personal, id }) => {
	return (
		<section className={'identity-personal'} id={id}>
			<h2 className={'identity-name'}>
				{personal.name}
				<span> | {personal.position}</span>
			</h2>
			<div className={"identity-avatar"}>
				<div className={'identity-avatar-container'} />
				<Image
					src={social}
					style={imageStyle}
					alt={'Avatar image'}
					loading={'eager'}
				/>
			</div>
			<div className={'identity-location'}>
				<span className={'identity-pin-container'}>
					<span className={'identity-pin'}>
						<Pin/>
					</span>
				</span>
				<span className={'identity-city'}>
					{personal.city}, {personal.country}
				</span>
			</div>
		</section>
	);
};


function Contact({ contact, social, accounts }): JSX.Element {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	const onClickUrl = (url) => {
		return () => openInNewTab(url);
	};

	return (
		<section className={'identity-contact'}>
			<h2>{contact.header}</h2>
			<p className={'identity-medium'}>
				<span className={'identity-contact-icon'}>
					<AtIcon
						size={'var(--text-m)'}
						color={Colors.PINK}
						weight='duotone'
					/>
				</span>
				{contact.mail}
			</p>
			<p className={'identity-medium'}>
				<span className={'identity-contact-icon'}>
					<PhoneCallIcon
						size={'var(--text-m)'}
						color={Colors.PURPLE}
						weight='duotone'
					/>
				</span>
				{contact.phone}
			</p>
			<h2>{social.header}</h2>
			<section className={'identity-accessibility'}>
				<LinkedinLogoIcon
					size={'3rem'}
					color={Colors.PURPLE}
					weight='duotone'
					onClick={onClickUrl(accounts[0].url)}
				/>
				<TwitterLogoIcon
					size={'3rem'}
					color={Colors.PURPLE}
					weight='duotone'
					onClick={onClickUrl(accounts[1].url)}
				/>
				<GithubLogoIcon
					size={'3rem'}
					color={Colors.PURPLE}
					weight='duotone'
					onClick={onClickUrl(accounts[2].url)}
				/>
			</section>
		</section>
	);
}



const About = ({ about }) => {
	return (
		<div className={'identity-about'}>
			<h2>{about.header}</h2>
			<h3>{about.content}</h3>
		</div>
	);
};


export default function Identity({
	identity
}: {
	identity: Promise<ReturnProps<IdentityProps>>;
}): JSX.Element {
	const languageContext = useContext(LanguageContext);
	const id = use(identity);
	const {
		personal: p,
		about: a,
		contact: c,
		social: s,
		accounts: ac
	} = languageContext.language === 'en'
		? id.frontmatter.language.en
		: id.frontmatter.language.pl;
	return (
		<div className={'identity'}>
			<section className={'grid-section'}>
				<Personal id='about' personal={p} />
				<Contact contact={c} social={s} accounts={ac} />
				<About about={a} />
			</section>
		</div>
	);
}
