import Head from 'next/head';
import React from 'react';
import Header from './header';

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <>
      <Head>
        {/* meta data */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A PokéDex website using NextJs and PokéApi"
        />
        <meta
          name="keywords"
          content="Pokémon, PokéDex, PokéApi, TypeScript, NextJs, ReactJs, Tailwindcss"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="blitzyTheDev" />

        {/* favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex min-h-screen flex-col bg-white text-black dark:bg-slate-900 dark:text-white">
        <Header />
        <main className="padding-x pt-20">{children}</main>
      </div>
    </>
  );
};

export default Layout;
