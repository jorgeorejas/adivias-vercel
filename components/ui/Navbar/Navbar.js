import Link from 'next/link';
import s from './Navbar.module.css';
import React from 'react';
import Logo from '@/components/icons/Logo';
import { useUser } from '@/utils/useUser';
import { MenuIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const { user, signOut } = useUser();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="sticky top-0 z-20 flex flex-wrap items-center p-3 lg:rounded-b lg:max-w-6xl lg:mb-4 lg:mx-auto lg:flex-row lg:justify-between lg:self-center bg-primary">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>

        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Logo />
          </a>
        </Link>
        <button
          className="inline-flex p-2 ml-auto bg-gray-800 rounded-md outline-none text-blue hover:bg-blue-600 lg:hidden hover:text-white"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <MenuIcon className="w-7"/>
        </button>

        <div
          className={`${
            navbarOpen ? '' : 'hidden'
          }   w-full lg:inline-flex lg:w-auto lg:self-center`}
        >
          <div className="flex flex-col items-start w-full lg:justify-between lg:inline-flex lg:flex-row lg:ml-auto lg:items-center lg:self-center lg:h-auto">
            <div className="flex flex-col justify-end flex-1 w-full gap-2 lg:gap-4 lg:flex-row">
              <div className="flex flex-col items-start w-full lg:self-center lg:justify-center lg:inline-flex lg:space-x-4 lg:flex-row lg:ml-auto lg:items-center lg:h-auto">
                <Link href="/#pricing">
                  <a className={s.link}>Pricing</a>
                </Link>
                <Link href="/#features">
                  <a className={s.link}>Features</a>
                </Link>
                <Link href="/signin">
                  <a className={s.link}>Sign in</a>
                </Link>
              </div>
              {user ? (
                <>
                  <Link href="/account">
                    <a className={s.link}>Account</a>
                  </Link>
                  <Link href="/app">
                    <a>
                      <div className="items-center justify-center w-full px-3 py-2 font-semibold bg-gray-800 rounded-md text-blue lg:inline-flex lg:w-auto hover:underline hover:text-white">
                        Dashboard
                      </div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="{s.link}" onClick={() => signOut()}>
                      <div className="items-center justify-center w-full px-3 py-2 font-semibold bg-gray-800 rounded-md text-blue lg:inline-flex lg:w-auto hover:underline hover:text-white ">
                        Log out
                      </div>
                    </a>
                  </Link>
                </>
              ) : (
                <Link href="/signin">
                  <a className={s.link}>
                    <div className="items-center justify-center w-full px-3 py-2 font-semibold bg-gray-800 rounded-md text-blue lg:inline-flex lg:w-auto hover:underline hover:text-white ">
                      Access
                    </div>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
