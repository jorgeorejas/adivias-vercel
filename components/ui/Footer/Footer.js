import Link from 'next/link';

import Logo from '@/components/icons/Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 mx-auto border-t max-w-8xl bg-primary">
      <div className="grid grid-cols-3 gap-8 py-12 m-auto transition-colors duration-150 lg:max-w-5xl text-primary">
        <div className="col-span-1 ">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <p className="font-medium text-primary">
            by:{' '}
            <Link href="https://jorgeorejas.com">
              <a className="hover:underline">Jorge Orejas</a>
            </Link>
          </p>
        </div>
        <div className="col-span-1 ">
          <ul className="flex flex-row flex-initial space-x-4 ">
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/#features">
                <a className="transition duration-150 ease-in-out text-primary hover:text-accents-6">
                  Features
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/#pricing">
                <a className="transition duration-150 ease-in-out text-primary hover:text-accents-6">
                  Pricing
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/open">
                <a className="transition duration-150 ease-in-out text-primary hover:text-accents-6">
                  Open
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start col-span-1 lg:justify-end text-primary">
          <div className="flex items-center h-10 space-x-6">
            <div>
              <span>&copy; {year} All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
