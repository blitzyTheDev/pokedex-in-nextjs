import Image from 'next/image';
import React from 'react';
import PokéDex from '@/assets/PokéDex.png';
import Link from 'next/link';
import Toggle from './toggle';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div
        className="padding-x flex min-w-full items-center justify-between border-b-4 
      border-red-500 bg-red-600 py-1 shadow-md dark:border-red-600 dark:bg-red-800"
      >
        <Link href="/">
          <Image alt="PokéDex" src={PokéDex} className="w-28" />
        </Link>

        <Toggle />
      </div>
      <div
        className="clip-path mt-[-4px] h-5 w-1/3 border-b-4 
      border-red-500 bg-red-600 dark:border-red-600 dark:bg-red-800 lg:w-1/4"
      ></div>
    </header>
  );
};

export default Header;
