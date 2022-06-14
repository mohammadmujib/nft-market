import { useState, useEffect, useContext } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import image from '../assets';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  console.log({ theme });
  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="flexCenter md:hidden cursor-pointer">
            <Image
              src={image.logo02}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">
              Cryptoket
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:flex">
            <Image
              src={image.logo02}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
