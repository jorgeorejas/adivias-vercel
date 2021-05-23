import Link from 'next/link';
import s from './Navbar.module.css';
import React from 'react';
import Logo from '@/components/icons/Logo';
import { useUser } from '@/utils/useUser';

const Navbar = () => {
  const { user, signOut } = useUser();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="sticky top-0 z-20 flex flex-wrap items-center p-3 lg:max-w-6xl lg:mb-4 lg:mx-auto lg:flex-row lg:justify-between lg:self-center bg-primary">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>

        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Logo />
          </a>
        </Link>
        <button
          className="inline-flex p-3 ml-auto bg-gray-800 rounded-md outline-none text-blue hover:bg-blue-600 lg:hidden hover:text-white"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            className="w-6 h-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            navbarOpen ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:content-center lg:w-auto lg:self-center`}
        >
          <div className="flex flex-col items-start w-full lg:self-center lg:justify-center lg:inline-flex lg:space-x-4 lg:flex-row lg:ml-auto lg:items-center lg:h-auto">
            <Link href="/#features">
              <a className={s.link}>Features</a>
            </Link>
            <Link href="/#pricing">
              <a className={s.link}>Pricing</a>
            </Link>
            <Link href="/open">
              <a className={s.link}>Open</a>
            </Link>
          </div>
        </div>
        <div
          className={`${
            navbarOpen ? '' : 'hidden'
          }   w-full lg:inline-flex lg:w-auto lg:self-center`}
        >
          <div className="flex flex-col items-start w-full lg:justify-between lg:inline-flex lg:flex-row lg:ml-auto lg:items-center lg:self-center lg:h-auto">
            <div className="flex justify-end flex-1 space-x-8">
              {user ? (
                <>
                  <Link href="/dashboard">
                    <a>
                      <div className="items-center justify-center w-full px-3 py-2 font-semibold bg-gray-800 rounded-md text-blue lg:inline-flex lg:w-auto hover:underline hover:text-white">
                        Dashboard
                      </div>
                    </a>
                  </Link>
                  <Link href="/account">
                    <a className={s.link}>Account</a>
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
