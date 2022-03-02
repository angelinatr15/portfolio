import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: 'Angelina Truong ',
    description: `I've been developing websites for 3 years straight. Get in touch with me to know more.`,
    image: '/static/avatar2.png',
    type: 'website',
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://portfolio-55n8kc7aj-angelinatr15.vercel.app/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://portfolio-55n8kc7aj-angelinatr15.vercel.app/${router.asPath}`}
        />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
