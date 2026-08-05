import React from "react";
import Head from  'next/head';

export default function Header() {
    const metadata = {
        name: 'Climoe',
        content: "Welcome on my site about IT Xperience",
    }
    return (
        <>
            <Head>
                <title>"climoe | IT Software Engineer"</title>
                <meta name={metadata.name} content={metadata.content} />
            </Head>
        </>
    )
}
