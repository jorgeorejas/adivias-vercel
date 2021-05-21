import Link from 'next/link';
import s from './Navbar.module.css';

import Logo from '@/components/icons/Logo';
import { useUser } from '@/utils/useUser';

const Navbar = () => {
  const { user, signOut } = useUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
          <div className="flex items-center flex-1">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
          </div>
          <div className="flex items-center flex-1">
            <nav className="hidden ml-6 space-x-2 lg:block">
              <Link href="/#features">
                <a className={s.link}>Features</a>
              </Link>
              <Link href="/#pricing">
                <a className={s.link}>Pricing</a>
              </Link>
              <Link href="/">
                <a className={s.link}>About</a>
              </Link>
            </nav>
          </div>

          <div className="flex justify-end flex-1 space-x-8">
            {user ? (
              <>
                <Link href="/account">
                  <a className={s.link}>Account</a>
                </Link>
                <Link href="#">
                  <a className="{s.link}" onClick={() => signOut()}>
                    <div className="items-center justify-center w-full px-3 py-2 font-semibold text-blue-200 bg-gray-800 rounded-full lg:inline-flex lg:w-auto hover:underline hover:text-white ">
                      Log out
                    </div>
                  </a>
                </Link>
              </>
            ) : (
              <Link href="/signin">
                <a className={s.link}>
                  <div className="items-center justify-center w-full px-3 py-2 font-semibold text-white bg-gray-800 rounded-full lg:inline-flex lg:w-auto hover:underline hover:text-white ">
                    Access
                  </div>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
