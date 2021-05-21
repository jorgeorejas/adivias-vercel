import Link from 'next/link';

import Logo from '@/components/icons/Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 mx-auto max-w-8xl bg-primary-2">
      <div className="grid grid-cols-1 gap-8 py-12 transition-colors duration-150 lg:grid-cols-12 text-primary bg-primary-2">
        <div className="col-span-1 lg:col-span-2">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="transition duration-150 ease-in-out text-primary hover:text-accents-6">
                  Home
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="transition duration-150 ease-in-out text-primary hover:text-accents-6">
                  About
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="transition duration-150 ease-in-out text-primary hover:text-accents-6">
                  Careers
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="transition duration-150 ease-in-out text-primary hover:text-accents-6">
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="font-bold transition duration-150 ease-in-out text-primary hover:text-accents-6">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="transition duration-150 ease-in-out text-primary hover:text-accents-6">
                  Privacy Policy
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="transition duration-150 ease-in-out text-primary hover:text-accents-6">
                  Terms of Use
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start col-span-1 lg:col-span-6 lg:justify-end text-primary">
          <div className="flex items-center h-10 space-x-6">
            <div>
              <span>&copy; {year} Jorge Orejas, All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
